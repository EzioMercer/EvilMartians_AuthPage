import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react';
import * as FirebaseAuth from 'firebase/auth';
import {auth} from '../firebase';
import firebase from 'firebase/compat/app';
import FirebaseError = firebase.FirebaseError;
import {UserData} from './Slices/UserDataSlice';

const firebaseSignInUp = async (isSignIn: boolean, email: string, password: string) => {
	const methodName = isSignIn ? 'signInWithEmailAndPassword' : 'createUserWithEmailAndPassword';

	try {
		const response = await FirebaseAuth[methodName](auth, email, password);

		return {user: response.user};

	} catch (err: any) {
		const error = err as FirebaseError;

		console.log(`Error from ${methodName}`, err.message, JSON.stringify(error));

		return {error: error.code};
	}
}

const api = createApi({
	baseQuery: fakeBaseQuery(),
	endpoints: (builder) => ({
		signInUp: builder.mutation({
			async queryFn({email, password}) {
				try {
					const response = await FirebaseAuth.fetchSignInMethodsForEmail(auth, email);
					const isUserExists = response.length !== 0;
					const data = await firebaseSignInUp(isUserExists, email, password);

					if (data.user) {
						const user: UserData = {
							uid: data.user.uid,
							newUser: !isUserExists,
							email: data.user.email
						}

						return {data: user}
					}

					return {error: data.error};

				} catch (err: any) {
					console.log('Error from fetchSignInMethodsForEmail', err.message);
					return {error: err.message as string};
				}
			},
		}),
	}),
});

export default api;

export const {useSignInUpMutation} = api;
