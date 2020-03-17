const mongoose = require("mongoose");
const { Schema } = mongoose;

const RequisitionSchema = new Schema({
	title: { type: String, required: true, trim: true },
	description: { type: String, required: true, trim: true },
	budget: { type: Number, required: true },
	status: { type: String, required: true, default: true },
	dateCreated: { type: Date, required: true, default: Date.now() },
	owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model("Requisition", RequisitionSchema);
