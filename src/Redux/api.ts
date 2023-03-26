import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react';
import * as FirebaseAuth from 'firebase/auth';
import {auth} from '../firebase';
import firebase from 'firebase/compat/app';
import FirebaseError = firebase.FirebaseError;
import {UserData} from './Slices/UserDataSlice';

const firebaseSignInUp = async (isNewUser: boolean, email: string, password: string):Promise<{data: UserData} | {error: string}> => {
	const methodName = isNewUser ? 'createUserWithEmailAndPassword' : 'signInWithEmailAndPassword';
	let data: {user: FirebaseAuth.User} | {error: string};

	try {
		const response = await FirebaseAuth[methodName](auth, email, password);

		data = {user: response.user};

	} catch (err: any) {
		const error = err as FirebaseError;

		console.log(`Error from ${methodName}`, err.message, JSON.stringify(error));

		data = {error: error.code};
	}

	if ('user' in data) {
		const userData: UserData = {
			uid: data.user.uid,
			newUser: isNewUser,
			email: data.user.email
		}

		return {data: userData}
	}

	return {error: data.error};
}

export type UserSignInUpData = {
	email: string,
	password: string
}

const api = createApi({
	baseQuery: fakeBaseQuery(),
	endpoints: (builder) => ({
		signIn: builder.mutation({
			async queryFn({email, password}: UserSignInUpData) {
				return await firebaseSignInUp(false, email, password)
			}
		}),
		signUp: builder.mutation({
			async queryFn({email, password}: UserSignInUpData) {
				return await firebaseSignInUp(true, email, password)
			}
		}),
		resetPassword: builder.mutation({
			async queryFn({email}: Omit<UserSignInUpData, 'password'>) {
				try {
					await FirebaseAuth.sendPasswordResetEmail(auth, email);

					return {data: null};
				} catch (err: any) {
					console.log('Error from sendPasswordResetEmail', err.message, JSON.stringify(err));
					return {error: err.code};
				}
			}
		}),
		OTP: builder.mutation({
			async queryFn({otp}: {otp: string}) {
				try {
					await FirebaseAuth.verifyPasswordResetCode(auth, otp);

					return {data: null};
				} catch (err: any) {
					console.log('Error from verifyPasswordResetCode', err.message, JSON.stringify(err));
					return {error: err.code};
				}
			}
		}),
		setNewPassword: builder.mutation({
			async queryFn({password, otp}: {password: string, otp: string}) {
				try {
					console.log(otp);

					await FirebaseAuth.confirmPasswordReset(auth, otp, password);

					return {data: null};
				} catch (err: any) {
					console.log('Error from confirmPasswordReset', err.message, JSON.stringify(err));
					return {error: err.code};
				}
			}
		}),
	}),
});

export default api;

export const {
	useSignInMutation,
	useSignUpMutation,
	useResetPasswordMutation,
	useOTPMutation,
	useSetNewPasswordMutation,
} = api;
