import { request } from './request';

export const usersApi = {
	list: () => {
		return request({
			url: "/users",
			method: 'GET',
		})
	},

	listLogged: ({ token }) => {
		return request({
			url: "/users/logged",
			method: 'POST',
			data: { token }
		})
	},

	delete: (id) => {
		return request({
			url: "/users/" + id,
			method: 'POST',
		})
	},

	update: (id, data) => {
		return request({
			url: "/users/" + id,
			method: 'PUT',
			data,
		})
	},

	create: (data) => {
		return request({
			url: "/users",
			method: 'POST',
			data,
		})
	},
};