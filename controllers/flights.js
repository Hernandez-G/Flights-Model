const { render } = require("ejs");
const flight = require("../models/flight");
const Flight = require("../models/flight");

module.exports = {
    new: newFlight,
    create,
    index
};

function index(req, res) {
    flight.find({}, function(err, flights){
        res.render('flights/index', { flights });
    });
}

function create(req, res){
    req.body.departDate = req.body.departDate;
    if (req.body.departDate) req.body.departDate = req.body.departDate.split(/\s*,\s*/);
    const flight = new Flight(req.body);
    flight.save(function(err){
        if (err) return res.render('flights/new');
     res.redirect('/flights')
    });
 }
 

function newFlight(req, res) {
    res.render('flights/new');
}