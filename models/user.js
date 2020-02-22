const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
	name: { type: String, required: true },
	last_name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	type: { type: String, required: true },
	status: { type: Boolean, required: true, default: true },
	reqList: { type: ["#Solicitud#"]}
});

//Creando una constante que almacene el Usuario actual, para que asi pueda ser exportado y usado por otras clases
const User = mongoose.model("User", UserSchema);
module.exports = User;
