const express = require('express');
const router = express.Router();
const { User } = require('../database/db');
const accessMiddleware = require('../middleware/accessMiddleware');

// THIS FUNC THROWS ERROR IF PARAMS IS WRONG -> CHECK ANOTHER ERRORS
const { WrongParametersError } = require('../lib/errors');

router
	.get("/users", accessMiddleware, async (req, res, next) => {
		try {
			const result = await User.find();

			// !!!  USE ONLY THIS SCHEMA FOR RESPONSE -> { status: 'success' or 'error', data: [] or {} or string } !!!
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
	.put("/users/:id", accessMiddleware, async (req, res, next) => {
		try {
			const { date, time, pressureUp, pressureDown, pulse, healthy, comment } = req.body;
			const { id } = req.params;
			if (!id) { throw new WrongParametersError() }

			const result = await User.findOneAndUpdate(id, { date, time, pressureUp, pressureDown, pulse, healthy, comment });

			res.json({
				status: 'success',
				data: result,
			});
		} catch (error) {
			next(error);
		}
	})

	// this is our delete method
	// this method removes existing data in our database
	.delete("/users/:id", accessMiddleware, async (req, res, next) => {
		try {
			const { id } = req.params;
			if (!id || isNaN(id)) { throw WrongParametersError }

			await User.findOneAndDelete(id);

			res.json({ status: 'success' });
		} catch (error) {
			next(error);
		}
	})

	// this is our create method
	// this method adds new data in our database
	.post("/users", accessMiddleware, async (req, res, next) => {
		try {
			let user = new User();

			const { name, surname, login, email, phone, password } = req.body;

			Object.assign(user, { name, surname, login, email, phone, password });

			const result = await user.save();

			res.json({ status: 'success', data: result });

		} catch (error) {
			next(error);
		}
	});

module.exports = router;