const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const timesheetSchema = new Schema({
  punchIn: {type: Schema.Types.ObjectId, ref: 'Punch'},    
  punchOut: {type: Schema.Types.ObjectId, ref: 'Punch'},
  employeeNum: { type: Schema.Types.ObjectId, ref: 'User' },
  addedDate: { type: Date, default: Date.now }
});

const Timesheet = mongoose.model("Timesheet", timesheetSchema);

module.exports = Timesheet;