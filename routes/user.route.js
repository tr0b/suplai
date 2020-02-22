const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const { ensureAuthenticated } = require("../auth");
//User Model

const User = require("./../models/user.js");

//Login
router.get("/login", (req, res) => res.send("Login"));

//Register Page

router.get("/seeuser",  async (req, res) => {
	try{
		const allUsers =  await User.find()
		return res.status(200).json(allUsers)
	}catch{
		res.status(500).json({ message: err.message })
	}

});

//Welcome Page
router.get("/", (req, res) => res.send("Welcome!"));

//Dashboard
router.get("/dashboard", ensureAuthenticated, (req, res) =>
	res.send("dashboard")
);

//Registe
router.post("/register", (req, res) => {
	const {
		name,
		last_name,
		email,
		password,
		password2,
		type,
		status,
		reqList
	} = req.body;
	let errors = [];
	//Check required fields
	if (!name || !last_name || !email || !password || !password2 || !type) {
		errors.push({ msg: "Please fill in all fields" });
	}

	if (password !== password2) {
		errors.push({ msg: "Passwords do not match" });
	}

	if (password.length < 8) {
		errors.push({
			msg:
				"Password must have be composed of at least 8 characters"
		});
	}
	if (errors.length !== 0) {
		res.send("register", {
			errors,
			name,
			last_name,
			email,
			type,
			password
		});
	} else {
		//Validation Passed
		console.log("Llegue a 72");
		User.findOne({ email: email }).then(user => {
			if (user) {
				//User Exists
				errors.push({
					msg: "The email is already registered"
				});
				res.send("register", {
					errors,
					name,
					last_name,
					email,
					type,
					password
				});
			} else {
				const newUser = new User({
					name: name,
					last_name: last_name,
					email: email,
					password: password,
					type: type,
					status: true,
					reqList: []
				});
				console.log(newUser);
				res.send("new User Added");
				//Hash Password
				bcrypt.genSalt(10, (err, salt) =>
					bcrypt.hash(
						newUser.password,
						salt,
						(err, hash) => {
							//Set Password to hashed
							if (err) throw err;
							newUser.password = hash;
							//Save User
							newUser.save()
								.then(user => {
									req.flash(
										"success_msg",
										"Success! User successfully registered!"
									);
									res.redirect(
										"/users/login"
									);
								})
								.catch(err =>
									console.log(
										err
									)
								);
						}
					)
				);
			}
		});
	}
});

//Login Handle
router.post("/login", (req, res, next) => {
	passport.authenticate("local", {
		successRedirect: "/dashboard",
		failureRedirect: "/users/login",
		failureFlash: true
	})(req, res, next);
});

//Logout Handle

router.get("/logout", (req, res) => {
	req.logout();
	req.flash("success_msg", "You are now logged out!");
	//Cambiar de rutas al front end nuestro *POR HACER
	res.redirect("users/login");
});
module.exports = router;
