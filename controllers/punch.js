const Punch = require('../models/Punch')
const Timesheet = require('../models/Timesheet')

module.exports = {
    create: function(req, res) {
        Punch.create(req.body.punch)
            .then(punch=>{
                Timesheet
                    .findOneAndUpdate({_id: req.body.timesheetid}, {punch: punch._id})
                    .then(timesheet=>res.json(timesheet))
                    .catch(err=>res.status(422).json(err))
            })
    },
    update: function(req, res) {
      Punch
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(punch => res.json(punch))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      Punch
        .findById({ _id: req.params.id })
        .then(punch => punch.remove())
        .then(punch => res.json(punch))
        .catch(err => res.status(422).json(err));
    }
  };
  