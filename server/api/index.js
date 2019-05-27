const healthStatusApi = require('./healthStatusApi');
const userApi = require('./userApi');
const authApi = require('./authApi');

module.exports = function (server) {
    server.use('/api/v1', authApi);
    server.use('/api/v1', healthStatusApi);
    server.use('/api/v1', userApi);
};