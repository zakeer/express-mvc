const express = require("express");
const userProfileRouter = express.Router();

userProfileRouter.get('/', (req, res) => res.send("User Profile GET RESPONSE"));
userProfileRouter.post('/', (req, res) => res.send("User Profile POST RESPONSE"));
userProfileRouter.put('/', (req, res) => res.send("User Profile PUT RESPONSE"));
userProfileRouter.delete('/', (req, res) => res.send("User Profile DELETE RESPONSE"));

module.exports = userProfileRouter;