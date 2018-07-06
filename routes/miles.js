const router = require("express").Router();
const punchController = require("../controllers/punch");

// Matches with "/api/miles"
router.route("/")
  .post(punchController.create);

// Matches with "/api/miles/:id"
router
  .route("/:id")
  .put(punchController.update)
  .delete(punchController.remove);

module.exports = router;