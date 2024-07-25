const project = require("./../controllers/project.controller");
const router = require("express").Router();

// projects
router.get("/projects", project.getAll);
router.post("/projects/create", project.createProject);
router.get("/projects/:id", project.getProjectByID);
router.get("/projects/user/:user_id", project.getProjectByUserID);
router.put("/projects/:id", project.updateProject); // just pass the field(s) you want to update e.g {"description": "new description"}
router.delete("/projects/:id", project.deleteProject);
router.delete("/projects", project.deleteAllProjects);

module.exports = router;