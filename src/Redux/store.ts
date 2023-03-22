import {configureStore} from '@reduxjs/toolkit';
import api from './api';
import userDataSlice from './Slices/UserDataSlice';
import LoadingSlice from './Slices/LoadingSlice';

const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		userData: userDataSlice,
		loading: LoadingSlice,
	},
	middleware: (gDM) => gDM().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
