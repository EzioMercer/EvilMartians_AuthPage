import {configureStore} from '@reduxjs/toolkit';
import AuthReducer from './Slices/AuthSlice';
import api from './api';

const store = configureStore({
	reducer: {
		auth: AuthReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: (gDM) => gDM().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
