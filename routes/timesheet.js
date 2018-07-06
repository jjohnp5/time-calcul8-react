const router = require("express").Router();
const timesheetController = require("../controllers/timesheet");

// Matches with "/api/timesheet"
router.route("/")
  .get(timesheetController.findAll)
  .post(timesheetController.create);

// Matches with "/api/timesheet/:id"
router
  .route("/:id")
  .put(timesheetController.update)
  .delete(timesheetController.remove);

module.exports = router;