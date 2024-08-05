const tasks = require("./../controllers/tasks.controller");
const router = require("express").Router();

router.post("/tasks/create", tasks.createTask);
router.get("/tasks", tasks.getAllTasks);

module.exports = router;