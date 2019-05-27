import { request } from './request';

export const userAuthApi = {
	list: (filters) => {
		return request({
			url: "/users",
			method: 'POST',
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