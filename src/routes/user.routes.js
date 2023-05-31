const express = require("express");
const userRouter = express.Router();
const controller = require("../controllers/user.controller.js");

userRouter.get('/', (req, res) => {
  return controller.getAllUsers(req, res);
});

userRouter.get('/:userId', controller.getUserDetails)

userRouter.post('/', controller.createUser);
userRouter.put('/', controller.updateUser);
userRouter.delete('/', controller.deleteUser);

module.exports = userRouter;