const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const punchSchema = new Schema({
  timesheet: {type: Schema.Types.ObjectId, ref: 'Timesheet', required: true},
  punchType: {type: String, enum: ['In', 'Out'], require: true},
  time: {type: Date, require: true, default: Date.now},
  addedDate: { type: Date, default: Date.now }
});

const Punch = mongoose.model("Punch", punchSchema);

module.exports = Punch;