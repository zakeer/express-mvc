const mongoose = require("mongoose");
// mongodb://localhost:27017
// URI -> mongodb://server:port/collectionName

function dbInitializer() {
  mongoose
    .connect(`mongodb://localhost:27017/mern`)
    .then(() => console.log(`MONGODB connected`))
    .catch(error => console.error(error))
}

module.exports = {
  dbInitializer
}
