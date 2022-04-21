const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');
const ticketsCtrl = require('../controllers/tickets');

router.get('/', flightsCtrl.index); 
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
router.get('/:id/tickets/new', ticketsCtrl.new)

router.post('/', flightsCtrl.create);
router.post('/:id/tickets/create', ticketsCtrl.create);

module.exports = router;

