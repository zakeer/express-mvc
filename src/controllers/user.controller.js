const User = require("../models/user.model.js");

function getAllUsers(request, response) {

  User.find({})
    .then(rows => response.json(rows))
    .catch(error => response.json({ status: "fail" }))

}

function getUserDetails(request, response) {
  const id = request.params.userId;
  User
    .findById(id)
    .then(row => {
      if (!row) {
        return response.json({ status: "fail" })
      }
      response.json(row)
    })
    .catch(error => response.json({ status: "fail" }))
}

function createUser(request, response) {
  const body = request.body;
  if (!body.email) {
    return response.status(400).send("Email is requried....")
  }
  const user = new User({
    email: body.email,
    name: body.name
  });
  user
    .save()
    .then(dbUser => response.json(dbUser))
    .catch(error => response.status(400).send(error))
}

function updateUser(request, response) {
  return response.send("UPDATE USER DATA");
}

function deleteUser(request, response) {
  const id = request.params.userId;
  User
    .findByIdAndRemove(id)
    .then(value => response.send("User Delete"))
    .catch(error => response.status(400).send(error))
}

function login(request, response) {
  const body = request.body;
  const email = body.email;
  if (!email) {
    return response.status(400).send("Email is required...");
  }
  User
    .findOne({ email: email })
    .then(value => {
      if (!value) {
        return response.status(400).send(`${email} is not found in DB`);
      }
      response.send(value);
    })
    .catch(error => response.send(error))
}

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,

  getUserDetails,
  login,
}