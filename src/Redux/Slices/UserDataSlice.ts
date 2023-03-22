import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Nullable} from '../../Helpers/Types/Nullable';

export type UserData = {
	uid: string,
	newUser: boolean,
	email: Nullable<string>
}

const initialState: UserData = {
	uid: '',
	newUser: false,
	email: null
}

const userDataSlice = createSlice({
	name: 'auth',
	initialState: initialState,
	reducers: {
		saveUserData: (_, action: PayloadAction<UserData>) => action.payload,
		deleteUserData: () => initialState,
	}
})

export const {saveUserData, deleteUserData} = userDataSlice.actions;
export default userDataSlice.reducer;
