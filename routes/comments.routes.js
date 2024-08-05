const comments = require("./../controllers/comments.controller");
const router = require("express").Router();

router.get("/comments", comments.getAll);
router.post("/comment/create", comments.create);

module.exports = router;