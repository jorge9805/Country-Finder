const { Router } = require("express");
const router = Router();
const {
  postActivity,
  getActivities,
  deleteAllActivities,
} = require("../controllers/activityController");
router.post("/", postActivity);
router.get("/", getActivities);
router.delete("/", deleteAllActivities);
//router.put("/updateCharacters",updateCharacters)
module.exports = router;
