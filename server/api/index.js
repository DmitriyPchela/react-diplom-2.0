const healthStatusApi = require('./healthStatusApi');
const userApi = require('./userApi');
const authApi = require('./authApi');
const medicineApi = require('./medicineApi');

module.exports = function (server) {
    server.use('/api/v1', authApi);
    server.use('/api/v1', healthStatusApi);
    server.use('/api/v1', userApi);
    server.use('/api/v1', medicineApi);
};