const router = require("express").Router();
const path = require('path');
const userRoutes = require('./user')
<<<<<<< HEAD
//const timesheetRoutes = require('./timesheet')
=======
const timesheetRoutes = require('./timesheet')
>>>>>>> 309d80b19c169686639d31d1628440d9770290a0
const punchRoutes = require('./punch')
const passport = require('passport');


router.use("/api/user", userRoutes)
<<<<<<< HEAD
//router.use('/api/timesheets', timesheetRoutes)
=======
router.use('/api/timesheet', timesheetRoutes)
>>>>>>> 309d80b19c169686639d31d1628440d9770290a0
router.use('/api/punch', punchRoutes)
// router.use('/login', loginRoute)

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  })

module.exports = router;
