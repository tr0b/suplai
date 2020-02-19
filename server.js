const express = require("express");
const cors = require("cors");
const app = express();

// Server Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(cors());
app.use(express.json());

// Static Files
//app.use(express.static(path.join(__dirname, "..", "public")));

// BodyParser

app.use(express.urlencoded({ extended: false }));

// Routes
app.use(process.env.API_BASE_PATH, require("./routes/user.route"));

// Default Router
//app.use("*", (req, res, next) => {
//	if (!req.originalUrl.includes(process.env.API_BASE_PATH))
//		res.sendFile(
//			path.join(__dirname, "..", "public", "index.html")
//		);
//	else next();
//});

//Lo de Arriba comentado por mientras, arreglarlo lo mas pronto posible
//
//Routes

//Users Route
app.use('/users',require('./routes/user.route'));

module.exports = app;
