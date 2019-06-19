const express = require('express');
const router = express.Router();
const { Medicine } = require('../database/db');
const accessMiddleware = require('../middleware/accessMiddleware');

router
	.post("/medicine/:id", accessMiddleware, async (req, res, next) => {
		try {
			const id = req.params.id;
			
			console.log(id);
			
			const result = await Medicine.findOne({userID: id});
			
			res.json({
				status: 'success',
				data: result,
			});
			
		} catch (error) {
			next(error);
		}
	})
	
	// .put("/medicine/:id", accessMiddleware, async (req, res, next) => {
	// 	try {
	// 		let { name, surname, login, email, phone, password, passwordNew, token } = req.body;
	//
	// 		passwordNew ? password = passwordNew : null;
	// 		const result = await User.findOneAndUpdate({ token: token }, { name, surname, login, email, phone, password });
	//
	// 		res.json({
	// 			status: 'success',
	// 			data: result,
	// 		});
	// 	} catch (error) {
	// 		next(error);
	// 	}
	// })
	
	.post("/medicine", accessMiddleware, async (req, res, next) => {
		try {
			const medicine = new Medicine();
			
			const { time, name, recommend, userID } = req.body;
			
			Object.assign(medicine, { name, time, recommend, userID});
			
			await medicine.save();
			
			res.json({
				status: 'success',
			});
			
		} catch (error) {
			next(error);
		}
	});

module.exports = router;