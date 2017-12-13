const express = require('express'),
      Visitor = require('../models/visitor')

module.exports = (() => {
  'use strict';

  const router = express.Router();

  router.post('/', (req, res) => {
    const newVisitor = new Visitor({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      company: req.body.company,
      officialVisit: req.body.officialVisit,
      escortRequired: req.body.escortRequired,
      escortName: req.body.escortName,
    })
    Visitor.create(newVisitor, (err){
      res.status(200).send();
    })
