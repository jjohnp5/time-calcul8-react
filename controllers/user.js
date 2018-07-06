const User = require('../models/User');
const Timesheet = require('../models/Timesheet')

module.exports = {
    findAll: function(req, res) {
      User
        .find(req.query)
        .sort({ date: -1 })
        .then(UserModel => res.json(UserModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      User
        .findById(req.params.id)
        .then(UserModel => res.json(UserModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      User
        .create(req.body)
        .then(UserModel => res.json(UserModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      User
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(UserModel => res.json(UserModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      User
        .findById({ _id: req.params.id })
        .then(UserModel => UserModel.remove())
        .then(UserModel => res.json(UserModel))
        .catch(err => res.status(422).json(err));
    },
    addTimesheet: function(req,res){
        User.findById({_id: req.params.body} )
            .then(user=>{
                Timesheet.create({employeeNum: user._id})
            })
    }
  };
  