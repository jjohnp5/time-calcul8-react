const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const milesSchema = new Schema({
  miles: { type: Number, required: true },
  addedDate: { type: Date, default: Date.now }
});

const Miles = mongoose.model("Miles", userSchema);

module.exports = Miles;
