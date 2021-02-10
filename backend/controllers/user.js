const db = require("../models");
var bcrypt   = require('bcrypt');
const User = db.users;

// Create and Save a new User
exports.signup = (req, res) => {
  // Validate request
  if ( !req.body.email ) {
    res.send({ code: 0, message: "Email can not be empty!" });
    return;
  }

  if ( !req.body.password ) {
    res.send({ code: 0, message: "Password can not be empty!" });
    return;
  }

  // Create a User
  const user = new User({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null),
  });

  User.findOne( {email: req.body.email})
    .then(data => {
      if (!data) {
        user
          .save(user)
          .then(data => {
            res.send({
              code: 1,
              user: data._id
            });
          })
          .catch(err => {
            res.send({
              code: 0,
              message:
                err.message || "Some error occurred while creating the User."
            });
          });
      } else {
        res
          .send({ code: 0, message: "User already existed!"});
      }
    })
    .catch(err => {
      res
        .send({ code: 2, message: "Something went wrong."});
    });
};

// Find a single User with an id
exports.signin = (req, res) => {
  
  User.findOne( {email: req.body.email})
    .then(data => {
      if (!data){
        res.send({ code: 0, message: "Not registered!" });
      }
      else if (bcrypt.compareSync(req.body.password, data.password)){
        res.send({
          code: 1,
          user: data._id
        });
      }
    })
    .catch(err => {
      res
        .send({ code: 2, message: "Error signin" });
    });
};
