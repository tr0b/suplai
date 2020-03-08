//Libraries
const express = require("express");
const cors = require("cors");
const flash = require("connect-flash");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const app = express();

//Passport config
require("./passport")(passport);

// Server Settings
app.set("port", process.env.PORT || 3000);
app.set("view engine", "html");

// Middlewares
app.use(cors());
app.use(express.json());

// Static Files
app.use(express.static(path.join(__dirname, "..", "public")));

// BodyParser
app.use(express.urlencoded({ extended: false }));

//Express Session Middleware
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: true,
		saveUninitialized: true,
	})
);

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(process.env.API_BASE_PATH, require("./routes/user.route"));
app.use(process.env.API_BASE_PATH, require("./routes/requisition.route"));

// Default Route
/* app.use("*", (req, res, next) => {
 *         if (!req.originalUrl.includes(process.env.API_BASE_PATH))
 *                 res.sendFile(
 *                         path.join(__dirname, "..", "public", "index.html")
 *                 );
 *         else next();
 * }); */

module.exports = app;
