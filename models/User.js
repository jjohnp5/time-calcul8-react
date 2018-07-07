const mongoose = require("mongoose");
const passport = require('passport');
require('dotenv').config();

const passportLocalMongoose = require('passport-local-mongoose')
const autoIncrement = require('mongoose-auto-increment')
const Schema = mongoose.Schema;
const connection = mongoose.createConnection(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");
autoIncrement.initialize(connection)

const userSchema = new Schema({
  employeeNum: {type: Number, required: true},
  firstName: { type: String, required: true },
  lastName: {type: String, required: true},
  timesheets: [{
    type: Schema.Types.ObjectId, ref: 'Timesheet'
  }],
  position: {type: Number, default: 1, enum: [1,2,3], required: true},
  addedDate: { type: Date, default: Date.now }
});

userSchema.plugin(autoIncrement.plugin, {model: 'User', field: 'empNum', startAt: 10000, incrementBy: 1})
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

module.exports = User;
