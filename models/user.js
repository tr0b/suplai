const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  type: { type: String, required: true },
  status: { type: String, required: true },
  reqList: { type: ["#Solicitud#"], required: true }
});

module.exports = mongoose.model("User", UserSchema);
