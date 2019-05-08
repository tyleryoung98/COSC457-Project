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
  });//company

  router.post('/airplane', function(req, res){
    console.log(req.body);
    const{tail_no,type,flight_hours,company,maxTOWeight,maxLandWeight,capacity,maxCargoWeight} = req.body;
    db.addAirplane(tail_no,type,flight_hours,company,maxTOWeight,maxLandWeight,capacity,maxCargoWeight).then(()=>{
      res.redirect('public/html/airplane.html');
    });
  });//airplane

  router.post('/airport', function(req, res){
    console.log(req.body);
    const{airport_Code,city,country,airport_Name} = req.body;
    db.addAirport(airport_Code,city,country,airport_Name).then(()=>{
      res.redirect('public/html/airport.html');
    });
  });//admin

  router.post('/pilot', function(req, res){
    console.log(req.body);
    const{employee_ID,name,company,flight_hours,position,flight_no} = req.body;
    db.addPilot(employee_ID,fname,lname,company,flight_hours,position,flight_no).then(()=>{
      res.redirect('public/html/company.html');
    });
  });//company

  router.post('/company', function(req, res){
    console.log(req.body);
    const{name,location,phone} = req.body;
    db.addCompany(name,location,phone).then(()=>{
      res.redirect('public/html/company.html');
    });
  });//company

  router.post('/maintEmpl', function(req, res){
    console.log(req.body);
    const{employee_ID,fname,lname,company} = req.body;
    db.addMaintEmpl(employee_ID,fname,lname,company).then(()=>{
      res.redirect('public/html/company.html');
    });
  });//company

  router.post('/passenger', function(req, res){
    console.log(req.body);
    const{ssn,fname,lname,citizenOf} = req.body;
    db.addPassenger(ssn,fname,lname,citizenOf).then(()=>{
      res.redirect('public/html/passenger.html');
    });
  });//passenger

  router.post('/insertRunway', function(req, res){
    console.log(req.body);
    const{airport_Code,runway_ID,length,status} = req.body;
    db.addRunway(airport_Code,runway_ID,length,status).then(()=>{
      res.redirect('public/html/admin.html');
    });
  });//airport
  router.post('/updateRunway', function(req, res){
    console.log(req.body);
    const{airport_Code,runway_ID,status} = req.body;
    db.updateRunway(airport_Code,runway_ID,status).then(()=>{
      res.redirect('public/html/atc.html');
    });
  });//airport

  router.post('/insertGate', function(req, res){
    console.log(req.body);
    const{section,gate_ID,company,airport_Code} = req.body;
    db.addGate(section,gate_ID,company,airport_Code).then(()=>{
      res.redirect('public/html/airport.html');
    });
  });//airport
  router.post('/updateGate', function(req, res){
    console.log(req.body);
    const{section,gate_ID,company,airport_Code} = req.body;
    db.updateGate(section,company,airport_Code).then(()=>{
      res.redirect('public/html/airport.html');
    });
  });//airport

  router.post('/insertFrequency', function(req, res){
    console.log(req.body);
    const{frequency,freqType,airport_Code} = req.body;
    db.addFrequency(airport_Code,frequency,freqType).then(()=>{
      res.redirect('public/html/atc.html');
    });
  });//atc
  router.post('/updateFrequency', function(req, res){
    console.log(req.body);
    const{frequency,freqType,airport_Code} = req.body;
    db.updateFrequency(airport_Code,frequency,freqType).then(()=>{
      res.redirect('public/html/atc.html');
    });
  });//atc

  router.post('/insertFlightData', function(req, res){
    console.log(req.body);
    const{flight_no,to_weight,fuel,callsign} = req.body;
    db.addFlight(flight_no,to_weight,fuel,callsign).then(()=>{
      res.redirect('public/html/flightData.html');
    });
  });//flightdata
  router.post('/updateFlightData', function(req, res){
    console.log(req.body);
    const{flight_no,to_weight,fuel,callsign} = req.body;
    db.updateFlight(flight_no,to_weight,fuel,callsign).then(()=>{
      res.redirect('public/html/flightData.html');
    });
  });//flightdata

  router.post('/insertMaintWork', function(req, res){
    console.log(req.body);
    const{tail_no,work_date,work_type,employee_ID} = req.body;
    db.addFrequency(tail_no,work_date,work_type,employee_ID).then(()=>{
      res.redirect('public/html/airplane.html');
    });
  });//airplane
  router.post('/updateMaintWork', function(req, res){
    console.log(req.body);
    const{tail_no,work_date,employee_ID} = req.body;
    db.updateFrequency(tail_no,work_date,employee_ID).then(()=>{
      res.redirect('public/html/airplane.html');
    });
  });//airplane

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
