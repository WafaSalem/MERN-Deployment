const { Pets } = require("../models/pets.model");

module.exports = {
  createNew: (req, res) => {
    Pets.create(req.body)
      .then((pet) => {
        console.log("you have successfully created Pet! ");
        res.json(pet);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
  getAll: (req, res) => {
    Pets.find({})
      .then((pet) => res.json(pet))
      .catch((err) => res.status(400).json(err));
  },
  getOne: (req, res) => {
    Pets.findOne({ _id: req.params.idd })
      .then((pet) => res.json(pet))
      .catch((err) => res.status(400).json(err));
  },
  updateOne: (req, res) => {
    Pets.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((pet) => res.json(pet))
      .catch((err) => res.status(400).json(err));
  },
  deleteOne: (req, res) => {
    Pets.deleteOne({ _id: req.params.iddd })
      .then((pet) => res.json(pet))
      .catch((err) => res.status(400).json(err));
  },
};
