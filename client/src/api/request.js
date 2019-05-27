import axios from 'axios';

const API = '/api/v1';

function getHeaders() {
    const token = localStorage.getItem('token');
    return {
        'Authorization': token
    };
}

const request = ({ url, data, method = 'POST' }) => {
    return axios({
        data,
        method,
        url: (API + url),
        withCredentials: true,
        headers: getHeaders()
    });
};

export { request };