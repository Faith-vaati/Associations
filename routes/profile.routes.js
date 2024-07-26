const profile = require("./../controllers/profile.controller");
const router = require("express").Router();

router.get("/profiles", profile.getAll);
router.post("/profile/create", profile.createProfile);

module.exports = router;