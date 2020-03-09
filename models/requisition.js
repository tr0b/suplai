const mongoose = require("mongoose");
const { Schema } = mongoose;
const shortId = require("shortid");

const RequisitionSchema = new Schema({
	_id: { type: String, default: shortId.generate },
	title: { type: String, required: true, trim: true },
	description: { type: String, required: true, trim: true },
	budget: { type: Number, required: true },
	status: { type: String, required: true, default: true },
	dateCreated: { type: Date, required: true, default: Date.now() },
	owner: { type: Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Requisition", RequisitionSchema);
