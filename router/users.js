var express = require('express');
var router = express.Router();

var app = express()

const { checkToken } = require("../auth/tokenValidation");

const {
  createUser,
  login,
  getUserByUserId,
  getUsers,
  updateUsers,
  deleteUser
} = require("../Controllers/usersController");
router.get("/", checkToken, getUsers);

router.post("/register", createUser);

router.get("/:id", checkToken, getUserByUserId);

router.post("/login", login);

router.patch("/update", checkToken, updateUsers);

router.delete("/", checkToken, deleteUser);

module.exports = router;