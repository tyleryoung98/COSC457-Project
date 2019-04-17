const router = require('express').Router();
const dbedits = new TableEdits();

module.exports = function(){
  //----------------------POSTS FOR UPDATE/INSERT-------------------------------
  router.post('/flights', function(req, res){
    console.log(req.body);
    const{flight_no,tail_no,origin,dest,to_time,land_time,seats} = req.body;
    dbedits.addFlight(flight_no,tail_no,origin,dest,to_time,land_time,seats).then(()=>{
      res.redirect('/html/company.html');
    });
  });

  router.post('/airplane', function(req, res){
    console.log(req.body);
    const{tail_no,type,flight_hours,company,maxTOWeight,maxLandWeight,capacity,maxCargoWeight} = req.body;
    dbedits.addAirplane(tail_no,type,flight_hours,company,maxTOWeight,maxLandWeight,capacity,maxCargoWeight).then(()=>{
      res.redirect('/html/airplane.html');
    });
  });

  router.post('/runway', function(req, res){
    console.log(req.body);
    const{airport_Code,runway_ID,length,status} = req.body;
    dbedits.addFlight(airport_Code,runway_ID,length,status).then(()=>{
      res.redirect('/html/airport.html');
    });
  });

  router.post('/gate', function(req, res){
    console.log(req.body);
    const{section,gate_ID,company,airport_Code} = req.body;
    dbedits.addFlight(section,gate_ID,company,airport_Code).then(()=>{
      res.redirect('/html/airport.html');
    });
  });

  router.post('/pilot', function(req, res){
    console.log(req.body);
    const{employee_ID,name,company,flight_hours,position,flight_no} = req.body;
    dbedits.addFlight(employee_ID,name,company,flight_hours,position,flight_no).then(()=>{
      res.redirect('/html/flight.html');
    });
  });

  router.post('/flightData', function(req, res){
    console.log(req.body);
    const{} = req.body;
    dbedits.addFlight(flight_no,to_weight,fuel,callsign).then(()=>{
      res.redirect('/html/flightData.html');
    });
  });

  //------------------------GETS FOR SELECT-------------------------------------
  router.get('/flights', function(req, res){
		db.getFlights().then(function(field){
			res.json(field);
		});
	});
}
