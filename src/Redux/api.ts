import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const api = createApi({
	baseQuery: fetchBaseQuery({baseUrl: 'https://...'}),
	endpoints: (builder) => ({
		signInUp: builder.mutation({
			query: ({body}) => ({
				url: '/sign-in',
				method: 'POST',
				body,
			})
		})
	})
});

export default api;

export const {useSignInUpMutation} = api;
