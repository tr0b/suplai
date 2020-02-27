const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
	name: { type: String, required: true },
	last_name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	type: { type: String, required: true, default: "user" },
	status: { type: Boolean, required: true, default: true }
});

//Creando una constante que almacene el Usuario actual, para que asi pueda ser exportado y usado por otras clases

UserSchema.virtual("requests", {
	ref: "Request",
	localField: "_id",
	foreignField: "owner"
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
