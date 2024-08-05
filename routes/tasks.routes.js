const tasks = require("./../controllers/tasks.controller");
const router = require("express").Router();

router.post("/tasks/create", tasks.createTask);
router.get("/tasks", tasks.getAllTasks);
router.get("/tasks/:id", tasks.getTaskById);
router.put("/tasks/update/:id", tasks.updateTask);
router.delete("/tasks/delete/:id", tasks.deleteTask);
router.get("/tasks/project/:project_id", tasks.getTaskByProjectId);


module.exports = router;