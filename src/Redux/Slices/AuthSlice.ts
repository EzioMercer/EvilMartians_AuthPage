import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Nullable} from '../../Helpers/Types/Nullable';

type AuthData = {
	authenticated: boolean,
	newUser: boolean,
	email: Nullable<string>
}

const initialState: AuthData = {
	authenticated: false,
	newUser: false,
	email: null
}

const authSlice = createSlice({
	name: 'auth',
	initialState: initialState,
	reducers: {
		signInUp: (_, action: PayloadAction<Omit<AuthData, 'authenticated'>>) => ({
			authenticated: true,
			...action.payload
		}),
		signOut: () => initialState,
	}
})

export const {signInUp, signOut} = authSlice.actions;
export default authSlice.reducer;
