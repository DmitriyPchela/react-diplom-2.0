import { request } from './request';

export const healthStatusApi = {
    list: () => {
        return request({
            url: "/health_status",
            method: 'GET',
        })
    },

    delete: (id) => {
        return request({
            url: "/health_status/" + id,
            method: 'POST',
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