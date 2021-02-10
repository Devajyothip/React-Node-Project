const db = require("../models");
const Color = db.colors;
const User = db.users;

// Find a single Color with an id
exports.findOne = (req, res) => {

  Color.findOne({user_id: req.body.user_id})
    .then(data => {
      if (!data){
        const color = new Color({
          user_id: id,
          wall_main: '#ffffff',
          wall_bar: '#ffffff',
          curtain_primary: '#ffffff',
          curtain_secondary: '#ffffff',
          curtain_bar: '#ffffff',
          sofa_primary: '#ffffff',
          sofa_secondary: '#ffffff',
          floor: '#ffffff',
        });      
        color
          .save(color)
          .then(data1 => {
            res.send(data1);
          })
          .catch(err => {
            res.send({
              message: err.message || "Some error occurred while creating the Color."
            });
          });
      } else res.send(data);
    })
    .catch(err => {
      res.send({ message: err.message });
    });
};

// Update a Color by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.send({
      message: "Data to update can not be empty!"
    });
  }
  
  Color.findOneAndUpdate({user_id: req.body.user_id}, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.send({
          message: `Cannot update Color. Maybe Color was not found!`
        });
      } else res.send({ message: "Color was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Color"
      });
    });
};
