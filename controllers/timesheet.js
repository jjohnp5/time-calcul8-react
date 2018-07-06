const Timesheet = require('../models/Timesheet');


module.exports = {
    
    create: function(req, res) {
      Timesheet
        .create(req.body)
        .then(TimesheetModel => res.json(TimesheetModel))
        .catch(err => res.status(422).json(err));
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
        .then(TimesheetModel => TimesheetModel.remove())
        .then(TimesheetModel => res.json(TimesheetModel))
        .catch(err => res.status(422).json(err));
    }
  };
  