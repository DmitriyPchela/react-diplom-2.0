import { request } from './request';

export const authApi = {
	login: (data) => {
		return request({
			url: '/auth/login',
			method: 'POST',
			data
		})
	},

	isAuthorized: ({ login, token }) => {
		return request({
			url: '/auth/isAuthorized',
			method: 'POST',
			data: { login, token  }
		})
	},

	logout: () => {
		return request({
			url: '/auth/logout',
			method: 'POST'
		})
	}
};