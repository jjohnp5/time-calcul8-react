const Punch = require('../models/Punch')
const Timesheet = require('../models/Timesheet')

module.exports = {
    create: function(req, res) {
        Punch.create(req.body.punch)
            .then(punch=>{
                User.find({employeeNum: req.body.id})
                .then(user=>{
                    Timesheet
                    .find({employeeNum: user.employeeNum}, {sort: {addedDate: -1} })
                    .then(timesheet=>{
                        if(timesheet[0].punch.length < 2){
                            Timesheet.findOneAndUpdate({_id: timesheet[0]._id}, {punch: punch._id})
                        }else{
                            Timesheet.create({employeeNum: user._id})
                                .then(timesheet=>{
                                    timesheet.update({punch: punch._id})
                                })
                        }
                    })
                    .catch(err=>res.status(422).json(err))
                })
                
            }).then(punch=>res.json(punch))
            .catch(err=>res.status(422).json(err))
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
  