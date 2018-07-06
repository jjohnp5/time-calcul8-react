const User = require('../models/User');
const Timesheet = require('../models/Timesheet')

module.exports = {
    findAll: function(req, res) {
      User
        .find()
        .then(UserModel => res.json(UserModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      Timesheet.create(req.body.timesheet)
        .then(sheet=>{
            User.findOneAndUpdate({_id: req.params.userid}, {timesheet: sheet._id})
                .then(user=>res.json(user))
                .catch(err=>res.status(422).json(err))
        }).catch(err=>res.status(422).json(err))
        
    },
    update: function(req, res) {
      Timesheet
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(TimesheetModel => res.json(TimesheetModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      Timesheet
        .findById({ _id: req.params.id })
        .then(tSheet => tSheet.remove())
        .then(tSheet => res.json(tSheet))
        .catch(err => res.status(422).json(err));
    }
  };
  