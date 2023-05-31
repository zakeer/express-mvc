const express = require("express");
const app = express();
app.use(express.json());

const db = require("./src/db.js");
db.dbInitializer();

const userRoutes = require("./src/routes/user.routes.js");
const userProfileRoutes = require('./src/routes/userprofile.routes.js');

app.use("/user", userRoutes);
app.use('/profile', userProfileRoutes)

app.listen(4000, () => {
  console.log(`Server is running..`)
})