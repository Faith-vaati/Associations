const project = require("./../controllers/project.controller");
const router = require("express").Router();

// projects
router.get("/projects", project.getAll);
router.post("/projects/create", project.createProject);

module.exports = router;