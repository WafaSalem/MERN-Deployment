const PetsController = require("../controllers/pets.controller");
const { Pets } = require("../models/pets.model");
// routes is similar to urls.py
module.exports = (app) => {
  // different routes for the endpoints to match Controller
  // Create
  app.post("/api/pets", PetsController.createNew);
  // Read
  // Get All
  app.get("/api/pets", PetsController.getAll);
//   // Get One
  app.get("/api/pets/:idd", PetsController.getOne);
//   // Update
  app.put("/api/pets/:id", PetsController.updateOne);
//   // Delete
  app.delete("/api/pets/:iddd", PetsController.deleteOne);
};
