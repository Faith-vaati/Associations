const user = require("./../controllers/user.controller");
const router = require("express").Router();

// users
router.get("/users", user.getAll);
router.post("/users/create", user.createUser);
router.get("/users/:id", user.getUserByID);
router.put("/users/:id", user.updateUser);
router.delete("/users/:id", user.deleteUser);
router.delete("/users/all", user.deleteAllUsers);

module.exports = router;