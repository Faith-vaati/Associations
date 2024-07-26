const user = require("./../controllers/user.controller");
const router = require("express").Router();

// users
router.get("/users", user.getAll);
router.post("/users/create", user.createUser);
router.post("/users/login", user.login);
router.get("/users/:id", user.getUserByID);
router.put("/users/:id", user.updateUser);
router.delete("/users/:id", user.deleteUser);
router.delete("/users", user.deleteAllUsers);

module.exports = router;