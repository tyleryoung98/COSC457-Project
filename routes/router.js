const router = require('express').Router();
const TableEdits = require('../sql.js');
const db = new TableEdits();
const path = require('path');
const bodyParser = require('body-parser');

module.exports = function(){
  //----------------------POSTS FOR UPDATE/INSERT-------------------------------
  router.post('/flights', function(req, res){
    console.log(req.body);
    const{flight_no,tail_no,origin,dest,to_time,land_time,seats} = req.body;
    db.addFlight(flight_no,tail_no,origin,dest,to_time,land_time,seats).then(()=>{
      res.redirect('public/html/company.html');
    });
  });

  router.post('/airplane', function(req, res){
    console.log(req.body);
    const{tail_no,type,flight_hours,company,maxTOWeight,maxLandWeight,capacity,maxCargoWeight} = req.body;
    db.addAirplane(tail_no,type,flight_hours,company,maxTOWeight,maxLandWeight,capacity,maxCargoWeight).then(()=>{
      res.redirect('public/html/airplane.html');
    });
  });

  router.post('/insertRunway', function(req, res){
    console.log(req.body);
    const{airport_Code,runway_ID,length,status} = req.body;
    db.addRunway(airport_Code,runway_ID,length,status).then(()=>{
      res.redirect('public/html/admin.html');
    });
  });
  router.post('/updateRunway', function(req, res){
    console.log(req.body);
    const{airport_Code,runway_ID,status} = req.body;
    db.updateRunway(airport_Code,runway_ID,status).then(()=>{
      res.redirect('public/html/atc.html');
    });
  });

  router.post('/insertGate', function(req, res){
    console.log(req.body);
    const{section,gate_ID,company,airport_Code} = req.body;
    db.addGate(section,gate_ID,company,airport_Code).then(()=>{
      res.redirect('public/html/airport.html');
    });
  });
  router.post('/updateGate', function(req, res){
    console.log(req.body);
    const{section,gate_ID,company,airport_Code} = req.body;
    db.updateGate(section,company,airport_Code).then(()=>{
      res.redirect('public/html/airport.html');
    });
  });

  router.post('/insertFrequency', function(req, res){
    console.log(req.body);
    const{frequency,freqType,airport_Code} = req.body;
    db.addFrequency(airport_Code,frequency,freqType).then(()=>{
      res.redirect('public/html/atc.html');
    });
  });
  router.post('/updateFrequency', function(req, res){
    console.log(req.body);
    const{frequency,freqType,airport_Code} = req.body;
    db.updateFrequency(airport_Code,frequency,freqType).then(()=>{
      res.redirect('public/html/atc.html');
    });
  });

  router.post('/pilot', function(req, res){
    console.log(req.body);
    const{employee_ID,name,company,flight_hours,position,flight_no} = req.body;
    db.addPilot(employee_ID,fname,lname,company,flight_hours,position,flight_no).then(()=>{
      res.redirect('public/html/airplane.html');
    });
  });

  router.post('/flightData', function(req, res){
    console.log(req.body);
    const{} = req.body;
    db.addFlight(flight_no,to_weight,fuel,callsign).then(()=>{
      res.redirect('public/html/flightData.html');
    });
  });

  //------------------------GETS FOR SELECT-------------------------------------
  router.get('/flights', function(req, res){
		db.getFlights().then(function(field){
      console.log(JSON.stringify(field));
			res.json(field);
		});
	});

  router.get('/airplanes', function(req, res){
		db.getAirplanes().then(function(field){
      console.log(JSON.stringify(field));
			res.json(field);
		});
	});

  router.get('/airports', function(req, res){
		db.getAirports().then(function(field){
      console.log(JSON.stringify(field));
			res.json(field);
		});
	});

  return router;
}
