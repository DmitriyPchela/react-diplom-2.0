import { request } from './request';

export const healthStatusApi = {
    list: (filters) => {
        return request({
            url: "/health_status",
            method: 'POST',
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