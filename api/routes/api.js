const express = require("express");
const router = express.Router();
const Guest = require("../models/guest");

// get a list of guests from the database
router.get("/guests", function (req, res, next) {
  Guest.find({})
    .then(function (guests) {
      res.send(guests);
    })
    .catch(next);
});

//get a guest to class
router.get("/guests/class/:class", function (req, res, next) {
  Guest.find({ class: req.params.class }).then(function (guest) {
    res.send(guest);
  });
});

// add a new guest to database
router.post("/guests", function (req, res, next) {
  Guest.create(req.body)
    .then(function (guest) {
      res.send(guest);
    })
    .catch(next);
});

// update a guest in the database
router.put("/guests/:id", function (req, res, next) {
  Guest.findOneAndUpdate({ _id: req.params.id }, req.body).then(function (
    guest
  ) {
    Guest.findOne({ _id: req.params.id }).then(function (guest) {
      res.send(guest);
    });
  });
});

// delete a guest in the database
router.delete("/guests/:id", function (req, res, next) {
  Guest.findOneAndDelete({ _id: req.params.id }).then(function (guest) {
    res.send(guest);
  });
});

module.exports = router;
