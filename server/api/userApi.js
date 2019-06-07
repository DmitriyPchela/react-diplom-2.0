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

			res.json({
				status: 'success',
				data: result,
			});
		} catch (error) {
			next(error);
		}
	})

	.get("/users/:id", accessMiddleware, async (req, res, next) => {
		try {
			const id = req.params.id;

			const result = await User.findOne({
				where: {
					_id: id,
				}
			});

			res.json({
				status: 'success',
				data: result,
			});
		} catch (error) {
			next(error);
		}
	})

	.post("/users/logged", accessMiddleware, async (req, res, next) => {
		try {
			const { token } = req.body;
			const result = await User.findOne({token: token});

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
			let { name, surname, login, email, phone, password, passwordNew, token } = req.body;

			passwordNew ? password = passwordNew : null;
			const result = await User.findOneAndUpdate({ token: token }, { name, surname, login, email, phone, password });

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
			let isAdmin;
			let user = new User();

			let { name, surname, login, email, phone, password } = req.body;

			login === 'admin' ? isAdmin = true : isAdmin = false;

			Object.assign(user, { name, surname, login, email, phone, password, isAdmin });

			const result = await user.save();

			res.json({ status: 'success', data: result });

		} catch (error) {
			next(error);
		}
	});

module.exports = router;