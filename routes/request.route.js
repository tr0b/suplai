//WIP
const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../auth");
//Request Model

const Request = require("../models/request.js");

//User Model

const User = require("../models/user.js");
//Add Request

router.post("/addRequest", ensureAuthenticated, async (req, res) => {
	const request = new Request({
		...req.body,
		owner: req.user._id
	});

	try {
		await request.save();
		res.status(201).send(request);
	} catch (e) {
		/* handle error */
		res.status(400).send(e);
	}
});

module.exports = router;
