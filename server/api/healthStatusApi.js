const express = require('express');
const router = express.Router();
const { HealthStatus } = require('../database/db');
const accessMiddleware = require('../middleware/accessMiddleware');

// THIS FUNC THROWS ERROR IF PARAMS IS WRONG -> CHECK ANOTHER ERRORS
const { WrongParametersError } = require('../lib/errors');

router
    .get("/health_status", accessMiddleware, async (req, res, next) => {
        try {
            const result = await HealthStatus.find();

            // !!!  USE ONLY THIS SCHEMA FOR RESPONSE -> { status: 'success' or 'error', data: [] or {} or string } !!! 
            res.json({
                status: 'success',
                data: result,
            });
        } catch (error) {
            next(error);
        }
    })
    
    .post("/health_status/logged", accessMiddleware, async (req, res, next) => {
        try {
            const { login } = req.body;
            const result = await HealthStatus.find({userID: login});
            
            res.json({
                status: 'success',
                data: result,
            });
            
        } catch (error) {
            next(error);
        }
    })

    // this is our update method
    // this method overwrites existing data in our database
    .put("/health_status/:id", accessMiddleware, async (req, res, next) => {
        try {
    
            await req.body.map(item => {
                // const { _id, date, time, pressureUp, pressureDown, pulse, healthy } = item;
                console.log(item);
                HealthStatus.findOneAndUpdate({_id: _id}, item);
            });
    
            await res.json({
                status: 'success',
            });
        } catch (error) {
            next(error);
        }
    })

    // this is our delete method
    // this method removes existing data in our database
    .delete("/health_status/:id", accessMiddleware, async (req, res, next) => {
        try {
            const { id } = req.params;
            if (!id || isNaN(id)) { throw WrongParametersError }

            await HealthStatus.findOneAndDelete(id);

            res.json({ status: 'success' });
        } catch (error) {
            next(error);
        }
    })

    // this is our create method
    // this method adds new data in our database
    .post("/health_status", accessMiddleware, async (req, res, next) => {
        try {
            let healthStatus = new HealthStatus();

            const { date, time, pressureUp, pressureDown, pulse, healthy, comment, userID } = req.body;

            Object.assign(healthStatus, { date, time, pressureUp, pressureDown, pulse, healthy, comment, userID });

            const result = await healthStatus.save();

            res.json({ status: 'success', data: result });

        } catch (error) {
            next(error);
        }
    });

module.exports = router;