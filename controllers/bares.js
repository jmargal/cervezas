const db = require("../models/db");
db.connect("./data");
db.loadCollections["bares"];


function getBares(req, res) {
  res.json(db.bares.find());
}

function getBar(req, res) {
  const barId = req.params.id;
  const bar = db.bares.find({ id: barId });
  if (bar.length) {
    res.json(bar);
  } else {
    res.json({ message: "El bar no existe" });
  }
}

function addBar(req, res) {
  const item = req.body;
  const bar = db.bares.save(item);
  res.json({ message: "post hecho" });
}

function deleteBar(req, res) {
  const barId = req.params.id;
  db.bares.remove({ id: barId });
  res.json(db.bares.find());
}

function editBar(req, res) {
  const barId = req.params.id;
  const bar = req.body;
  db.bares.update({ id: barId }, bar);
  res.json(db.bares.find());
}
module.exports = { getBares, getBar, addBar, deleteBar, editBar };
