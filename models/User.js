const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  empNum: { type: Number, required: true },
  firstName: { type: String, required: true },
  lastName: {type: String, required: true},
  timesheets: [{
    type: Schema.Types.ObjectId, ref: 'Timesheet'
  }],
  position: {type: Number, default: 1, required: true},
  addedDate: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
