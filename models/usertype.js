const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserTypeSchema = new Schema({
	userID: { type: Integer, required: true },
	description: { type: String, required: true }
});

module.exports = mongoose.model("UserType", UserTypeSchema);
