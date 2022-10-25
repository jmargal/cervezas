const db = require("../models/db");
db.connect('./data');
db.loadCollections['cervezas'];
db.loadCollections['bares']

const arrayCervezas=db.cervezas.find();

function getBeers(req, res) {
  res.json(arrayCervezas);
}

function getBeer(req, res) {
  let idCer = req.params.id;
  for (let i = 0; i < arrayCervezas.length; i++) {
    if ((arrayCervezas[i].id ===idCer)) {
      res.json(arrayCervezas[i]);
    }
  }
}

function addBeer(req, res) {
  arrayCervezas.push(req.body);
  res.json({ mensaje: "post hecho" });
}

function deleteBeer(req, res) {
  let id = req.params.id;
  arrayCervezas.splice(id - 1, 1);
  res.json({ mensaje: "delete hecho" });
}

function editBeer(req, res) {}

module.exports = { getBeers, getBeer, addBeer, deleteBeer, editBeer };
