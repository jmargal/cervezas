const db = require("../models/db");
db.connect("./data");
db.loadCollections["cervezas"];

function getBeers(req, res) {
  res.json(db.cervezas.find());
}

function getBeer(req, res) {
  const beerId = req.params.id;
  const beer = db.cervezas.find({ id: beerId });
  if (beer.length) {
    res.json(beer);
  } else {
    res.json({ message: "La cerveza no existe" });
  }
}

function addBeer(req, res) {
  const beer = req.body;
  const update = db.cervezas.save(beer);
  res.json(update);
}

function deleteBeer(req, res) {
  const beerId = req.params.id;
  db.cervezas.remove({ id: beerId });
  res.json(db.cervezas.find());
}

function editBeer(req, res) {
  const beerId = req.params.id;
  const beer = req.body;
  db.cervezas.update({ id: beerId }, beer);
  res.json(db.cervezas.find());
}

module.exports = { getBeers, getBeer, addBeer, deleteBeer, editBeer };
