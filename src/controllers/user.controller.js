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
      if(!row) {
        return response.json({ status: "fail" })
      }
      response.json(row)
    })
    .catch(error => response.json({ status: "fail" }))
}

function createUser(request, response) {
  return response.send("POST CREATE USER");
}

function updateUser(request, response) {
  return response.send("UPDATE USER DATA");
}

function deleteUser(request, response) {
  return response.send("DELETE USER DATA");
}
module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,

  getUserDetails
}