const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,

    
  };
  
  function newTicket(req, res) {
    Ticket.find({}).sort('arrivals').exec(function (err, tickets) {
      res.render('ticket/new', {
        title: 'Add Ticket',
        tickets
      });
    });
  }