const db = require("../models");
const Color = db.colors;

// Create and Save a new Color
exports.create = (req, res) => {
  // Validate request
  if ( !req.body.wall_main ||
    !req.body.wall_bar ||
    !req.body.curtain_primary ||
    !req.body.curtain_secondary ||
    !req.body.curtain_bar ||
    !req.body.sofa_primary ||
    !req.body.sofa_secondary ||
    !req.body.floor ) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Color
  const color = new Color({
    _id: req.body._id,
    wall_main: req.body.wall_main,
    wall_bar: req.body.wall_bar,
    curtain_primary: req.body.curtain_primary,
    curtain_secondary: req.body.curtain_secondary,
    curtain_bar: req.body.curtain_bar,
    sofa_primary: req.body.sofa_primary,
    sofa_secondary: req.body.sofa_secondary,
    floor: req.body.floor,
  });

  // Save Color in the database
  color
    .save(color)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Color."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Color.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving colors."
      });
    });
};

// Find a single Color with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Color.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Color with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Color with id=" + id });
    });
};

// Update a Color by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Color.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Color with id=${id}. Maybe Color was not found!`
        });
      } else res.send({ message: "Color was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Color with id=" + id
      });
    });
};

// Delete a Color with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Color.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Color with id=${id}. Maybe Color was not found!`
        });
      } else {
        res.send({
          message: "Color was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Color with id=" + id
      });
    });
};
