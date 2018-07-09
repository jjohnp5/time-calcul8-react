const router = require("express").Router();
const timesheetController = require("../controllers/timesheet");
const passport = require('passport');
const {mgrJwtStrategy} = require('../middleware/manager-jwt')
const {protected, jwtStrategy} = require('../middleware/jwt')
// const loginRoute = require('./login')
passport.use('mgr', mgrJwtStrategy);
passport.use(jwtStrategy);

// Matches with "/api/timesheet"
router.route("/")
  .get(passport.authenticate('mgr', { session: false }), timesheetController.findAll)
  .post(protected, timesheetController.create);

// Matches with "/api/timesheet/:id"
router
  .route("/:id")
  .put(passport.authenticate('mgr', { session: false }), timesheetController.update)
  .delete(passport.authenticate('mgr', { session: false }), timesheetController.remove);

module.exports = router;