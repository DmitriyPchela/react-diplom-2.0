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
                       token
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
        const { token, login } = req.body;

        const user = await User.findOne({
            login,
        })

        if(user) {
            console.log(token,  user.token);
            const isAuthorized = token === user.token;

            if(isAuthorized) {
                res.json({
                    status: 'success',
                    data: {
                        isAuthorized
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

    .post('/auth/logout', async (req, res) => {
        const token = req.headers['Authorization'];

        try {
            const profile = await User.get({
                token
            });

            if (profile) {
                await profile.save({
                    token: ''
                });
            }
        } catch (err) {
            next(err)
        }
    });

module.exports = router;