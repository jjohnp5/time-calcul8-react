const Miles = require('../models/miles')
const Timesheet = require('../models/Timesheet')

module.exports = {
    create: function(req, res) {
        Miles
            .create(req.body.mile)
            .then(miles=>{
                Timesheet.findOneAndUpdate({_id: req.body.timesheetid}, {milesTraveled: miles._id})
                    .then(sheet=>{
                        return res.json(sheet)
                    })
                    .catch(err=>res.status(422).json(err))
            })
    },
    update: function(req, res) {
      Miles
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(mile => res.json(mile))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      Miles
        .findById({ _id: req.params.id })
        .then(mile => punch.remove())
        .then(mile => res.json(punch))
        .catch(err => res.status(422).json(err));
    }
  };
  