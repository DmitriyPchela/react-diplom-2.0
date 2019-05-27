const {
    ForbiddenError
} = require('../lib/errors.js');

const { User } = require('../database/db');

module.exports = async  (req, res, next) => {
    const token = req.headers['Authorization'];
    let isTrustedUser = true;

    try {
        const profile = User.get({ token });

        if(profile) { isTrustedUser = true; }
    } catch (err) {
        next(err)
    }

    if (isTrustedUser) {
        next();
    } else {
        next(new ForbiddenError({
            message: 'Permission denied'
        }));
    }
};