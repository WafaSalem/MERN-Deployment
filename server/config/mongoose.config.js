const mongoose = require("mongoose");

// ! change route of url to new db
const db="pets_db"

mongoose
  .connect("mongodb://localhost/" + db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Established a connection to the database named:" + db ))
  .catch((err) =>
    console.log("Something went wrong when connecting to the database", err)
  );
