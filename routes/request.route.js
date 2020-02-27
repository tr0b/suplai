//WIP
const express = require("express");
const router = express.Router();
const auth = require("../auth.js");
//Request Model

const Request = require("../models/request.js");

//User Model

const User = require("../models/user.js");
//Add Product

router.post("/add", auth, (req, res) => {
	//Authentication implemented for request additions
	let datecreated = new Date();
	const { title, description, budget, status, datecreated } = req.body;
	let errors = [];
	//Check The Request Required Fields (VALIDATION) TODO
	if (!title || !description || !budget || !status || !datecreated) {
		errors.push({ msg: "Please fill in all fields" });
	} else {
		//Passed Validation (TODO)
		const newRequest = new Request({
			title: title,
			description: description,
			budget: budget,
			status: status,
			datecreated: datecreated
		});

		//Save Request (TODO)
		newRequest
			.save()
			.then(request => {
				req.flash(
					"success_msg",
					"Success! Request successfully registered!"
				);
			})
			.catch(err => console.log(err));
		console.log(newRequest);
		res.send("new Request Added");
	}
});
