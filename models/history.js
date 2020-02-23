const mongoose = require("mongoose");
const { Schema } = mongoose;

const HistorySchema = new Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	budget: { type: String, required: true },
	status: { type: String, required: true },
	datecreated: { type: Date, required: true }
});

module.exports = mongoose.model("History", HistorySchema);
