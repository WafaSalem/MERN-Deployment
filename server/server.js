const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// database connection 
// mongoose.config  is the file name in config
require("./config/mongoose.config")
// routes connection
require("./routes/pets.routes")(app)
app.listen(port, () => console.log(`Listening on port: ${port}`) ); 