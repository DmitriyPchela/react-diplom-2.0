import { request } from './request';

export const healthStatusApi = {
    list: () => {
        return request({
            url: "/health_status",
            method: 'GET',
        })
    },
    
    listUser: (login) => {
        return request({
            url: "/health_status/logged",
            method: 'POST',
            data: { login }
        })
    },

    delete: (id) => {
        return request({
            url: "/health_status/" + id,
            method: 'DELETE',
        })
    },

    update: (id, data) => {
        return request({
            url: "/health_status/" + id,
            method: 'PUT',
            data,
        })
    },

    create: (data) => {
        return request({
            url: "/health_status",
            method: 'POST',
            data,
        })
    },
}