const mongoose = require("mongoose");
/*
Users
----------------------------------------------------------------
name (String)   |   email (String)    | isActive (Boolean)
----------------------------------------------------------------

const schema = new mongoose.Schema({
  name: String,
  email: String,
  isActive: Boolean
})

const profileSchema = new mongoose.Schema({
  pic: 'String',
  address: 'string'
  userId: 'Number'
})

mongoose.model('User', schema);
mongoose.model('UserProfile', schema);
*/

const UserSchema = new mongoose.Schema({
  name: 'String',
  email: 'String',
  isActive: 'Boolean'
});                       
const User = mongoose.model('User', UserSchema);
module.exports = User;
