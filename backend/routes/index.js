module.exports = app => {
  const colors = require("../controllers/color.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", colors.create);

  // Retrieve all Tutorials
  router.get("/", colors.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", colors.findOne);

  // Update a Tutorial with id
  router.put("/:id", colors.update);

  // Delete a Tutorial with id
  router.delete("/:id", colors.delete);

  app.use('/api/color', router);
};