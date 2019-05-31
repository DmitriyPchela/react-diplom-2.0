const express = require('express');
const router = express.Router();
const { User } = require('../database/db');
const { getToken } = require('../lib/utils');
router
    .post('/auth/login', async function (req, res, next) {
        const { login, password} = req.body;

        try {
           const profile = await User.findOne({
               login,
               password,
           });

           if (profile) {
               const token = getToken();
               profile.token = token;
               await profile.save();

               res.json({
                   data: {
                       token,
                       profile,
                       isAuthorized: true,
                   },
                   status: 'success',
               })
           } else {
               res.json({
                   status: 'error',
                   message: 'User not found'
               })
           }
       } catch (err) {
           next(err)
       }
    })

    .post('/auth/isAuthorized', async (req, res) => {
        const { token } = req.body;

        const profile = await User.findOne({
            token,
        });

        if (profile) {
            const isAuthorized = token === profile.token;

            if (isAuthorized) {
                res.json({
                    status: 'success',
                    data: {
                        isAuthorized,
                        profile: profile,
                    },
                })
            } else {
                res.json({
                    status: 'error',
                    message: 'Token is not valid'
                })
            }

        } else {
            res.json({
                status: 'error',
                message: 'User not found'
            })
        }
    })

    .post('/auth/logout', async (req, res, next) => {
        // const token = req.headers['proxy-authorization'];
        const { token } = req.body;

        try {
            const user = await User.findOne({
                token
            });

            if (user) {
                const isAuthorized = false;
                user.token = '';

                await user.save();

                res.json({
                    status: 'success',
                    data: {
                        isAuthorized
                    },
                })
            } else {
                res.json({
                    status: 'error',
                    message: 'Error while delete'
                })
            }
        } catch (err) {
            next(err)
        }
    });

module.exports = router;