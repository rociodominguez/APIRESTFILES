const { isAdmin } = require("../../middleware/auth");
const { register, login, deleteUser, getUsers } = require("../controllers/user");

const usersRoutes = require("express").Router();

usersRoutes.get("/", getUsers)
usersRoutes.post("/register", register)
usersRoutes.post("/login", login);
usersRoutes.delete("/:id", [isAdmin], deleteUser)

module.exports = usersRoutes;