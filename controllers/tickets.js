const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create

    
  };
  
  function create(req, res){
    req.body.flight = req.params.id; 
    console.log('rq');
    const ticket = new Ticket(req.body);
    ticket.save(function(err){
        if (err) return res.render('tickets/new');
        res.redirect(`/flights/${req.params.id}`);
    });
};
  function newTicket(req, res) {
   res.render('tickets/new', {title: 'Add Flight', flightId: req.params.id});
    
  };