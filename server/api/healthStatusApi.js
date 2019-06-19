const express = require('express');
const router = express.Router();
const { HealthStatus } = require('../database/db');
const accessMiddleware = require('../middleware/accessMiddleware');

router
    .get("/health_status", accessMiddleware, async (req, res, next) => {
        try {
            const result = await HealthStatus.find();
            
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

    .put("/health_status/:id", accessMiddleware, async (req, res, next) => {
        try {
            req.body.map(async item => {
                const { date, time, pressureUp, pressureDown, pulse, healthy } = item;
                await HealthStatus.findOneAndUpdate({_id: item._id}, { date, time, pressureUp, pressureDown, pulse, healthy });
            });

            res.json({
                status: 'success',
            });
        } catch (error) {
            next(error);
        }
    })

    .delete("/health_status/:id", accessMiddleware, async (req, res, next) => {
        try {
            const { id } = req.params;

            await HealthStatus.findOneAndDelete(id);

            res.json({
                status: 'success'
            });
        } catch (error) {
            next(error);
        }
    })

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