const express = require("express");
const userRouter = express.Router();
const controller = require("../controllers/user.controller.js");

userRouter.get('/', controller.getAllUsers);
userRouter.get('/:userId', controller.getUserDetails);
userRouter.post('/', controller.createUser);
userRouter.put('/', controller.updateUser);
userRouter.delete('/:userId', controller.deleteUser);
userRouter.post('/login', controller.login)

module.exports = userRouter;