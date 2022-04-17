const { render } = require("ejs");
const Flight = require("../models/flight");

module.exports = {
    new: newFlight,
    create
};

function create(req, res){
    req.body.flightNo = !!req.body.flightNo;
    req.body.departDate = req.body.departDate.trim();
    if (req.body.departDate) req.body.departDate = req.body.departDate.split(/\s*,\s*/);
    console.log(req.body);
    const flight = new Flight(req.body);
    flight.save(function(err){
        if (err) return res.render('flights/new');
        console.log(flight);
     res.redirect('/flights')
    });
 }
 

function newFlight(req, res) {
    res.render('flights/new');
}