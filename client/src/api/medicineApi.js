import { request } from './request';

export const medicineApi = {
	create: (data) => {
		return request({
			url: "/medicine",
			method: 'POST',
			data,
		})
	},
	
	list: (id) => {
		return request({
			url: "/medicine/"+ id,
			method: 'POST'
		})
	}
};