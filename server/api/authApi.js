const express = require('express');
const router = express.Router();
const { User } = require('../database/db');
const { getToken } = require('../lib/utils');
router
    .post('/auth/login', async function (req, res, next) {
        const { login, password} = req.body;

       try {
           const profile = User.get({
               login,
               password,
           });

           if (profile) {
               const token = getToken();

               await profile.save({
                   token
               });

               res.json({
                   token
               })
           }

           res.json('Logged in');
       } catch (err) {
           next(err)
       }
    })

    .post('/auth/logout', async (req, res) => {
        const token = req.headers['Authorization'];

        try {
            const profile = User.get({
                token
            });

            if(profile) {
                await profile.save({
                    token: ''
                });
            }
        } catch (err) {
            next(err)
        }
    });

module.exports = router;