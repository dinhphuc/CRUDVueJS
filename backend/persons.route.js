const express = require('express');
const personRoutes = express.Router();
var mysql = require('mysql');
const fs = require('fs')
const filename = './data.json'

var persons = [];


function getAllDataFromFile() {
    fs.readFile(filename, (err, data) => {
        if (err) throw err;
        let results = JSON.parse(data);
        persons = results;
    });
}
function saveDataToFile() {
    let data = JSON.stringify(persons);
    fs.writeFileSync(filename, data, (err) => {
        if (err) throw err;
    });
}

getAllDataFromFile();

// Defined store route
personRoutes.route('/add').post(function (req, res) {
    var person = {
        FullName: req.body.FullName,
        Address: req.body.Address,
        Age: Number(req.body.Age)
    }
    var id = persons[persons.length - 1].ID;
    person.ID = Number(id) + 1;
    persons.push(person);
    saveDataToFile();
    res.status(200).json({ 'person': 'person in added successfully' });

});

// Defined get data(index or listing) route
personRoutes.route('/').get(function (req, res) {
    res.send(persons);
});

// Defined edit route
personRoutes.route('/edit/:id').get(function (req, res) {
    let id = Number(req.params.id);

    var person = persons.find(
        function (element) {
            return element.ID == id;
        }
    );
    res.send(person);
});

//  Defined update route
personRoutes.route('/update/:id').post(function (req, res) {
    let id = Number(req.params.id);

    var index = persons.map(function (e) { return e.ID; }).indexOf(id);
    if (!index) {
        res.send("404");
    } else {
        persons[index].FullName = req.body.FullName;
        persons[index].Address = req.body.Address;
        persons[index].Age = req.body.Age;
        saveDataToFile();
        res.status(200).json({ 'status': 'update successfully' });
    }
});

// Defined delete | remove | destroy route
personRoutes.route('/delete/:id').post(function (req, res) {
    let id = Number(req.params.id);

    var index = persons.map(function (e) { return e.ID; }).indexOf(id);
    if (!index) {
        res.send("404");
    } else {
        persons.splice(index, 1);
        saveDataToFile();
        res.status(200).json({ 'status': 'update successfully' });
    }
  
});

module.exports = personRoutes;