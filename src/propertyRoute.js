const express = require("express");
const route = express.Router();
const Property = require("./modal");

// get all  properties
route.get("/", async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.json({ message: error });
  }
});

// create a new property
route.post("/", async (req, res) => {
  const property = new Property({
    name: req.body.name,
    desc: req.body.desc,
    size: req.body.size,
  });
  try {
    const newProperty = await property.save();
    res.json(newProperty);
  } catch (error) {
    res.json({ message: error });
  }
});

//delete a property

route.delete("/:id", async (req, res) => {
  try {
    const deleteProperty = await Property.remove({ _id: req.params.id });
    res.json(deleteProperty);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = route;
