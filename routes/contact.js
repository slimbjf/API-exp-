// 1- Require express
const express = require("express");
const Contact = require('../models/User')


// 2- Create an Express router
const router = express.Router();

// Test route
router.get("/", (req, res) => {
  res.send("Hello world");
});

// Export the router
module.exports = router;

// Add contact
router.post("/add", async (req, res) => {
    try {
      const { name, email, age } = req.body;
  
      const newContact = new Contact({ name, email, age });
  
      const savedContact = await newContact.save();
  
      res.status(200).send({ msg: "Contact added successfully..", newContact: savedContact });
    } catch (error) {
      res.status(400).send({ msg: "Cannot add contact !!", error });
    }
  });
  
  // Get all contacts
router.get("/getall", async (req, res) => {
    try {
      const listContacts = await Contact.find();
  
      res.status(200).send({
        msg: "This is the list of all contacts",
        listContacts,
      });
    } catch (error) {
      res.status(400).send({
        msg: "Can not get all contacts!!",
        error  });
   
     }});

    
  
// Get one contact
router.get("/:id", async (req, res) => {
    try {
      const contactToGet = await Contact.findOne({ _id: req.params.id });
  
      res.status(200).send({
        msg: "This is the contact",
        contactToGet,
      });
    } catch (error) {
      res.status(400).send({
        msg: "Cannot get the contact!",
        error,
      });
    }
  });
  
  // Delete contact
router.delete("/:id", async (req, res) => {
    try {
      const { _id } = req.params;
  
      await Contact.findOneAndDelete({ _id });
  
      res.status(200).send({
        msg: "Contact deleted ...",
      });
    } catch (error) {
      res.status(400).send({
        msg: "Can not delete the contact!!",
        error,
      });
    }
  });

  // Edit contact
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Contact.updateOne(
      { _id: id },
      { $set: { ...req.body } }
    );

    res.status(200).send({
      msg: "Contact updated ...",
      result,
    });
  } catch (error) {
    res.status(400).send({
      msg: "Can not edit the contact!!",
      error,
    });
  }
});

// Export
module.exports = router;
