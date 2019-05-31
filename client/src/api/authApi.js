import { request } from './request';

export const authApi = {
	login: (data) => {
		return request({
			url: '/auth/login',
			method: 'POST',
			data
		})
	},

	logout: login  => {
		return request({
			url: '/auth/logout',
			method: 'POST',
			data: login
		})
	},

	isAuthorized: ({ token }) => {
		return request({
			url: '/auth/isAuthorized',
			method: 'POST',
			data: { token }
		})
	},
};