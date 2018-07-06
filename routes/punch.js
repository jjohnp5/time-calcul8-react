const router = require("express").Router();
const punchController = require("../controllers/punch");

// Matches with "/api/punch"
router.route("/")
  .post(punchController.create);

// Matches with "/api/punch/:id"
router
  .route("/:id")
  .put(punchController.update)
  .delete(punchController.remove);

module.exports = router;