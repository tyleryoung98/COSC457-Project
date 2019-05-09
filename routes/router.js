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
      res.redirect('company.html');
    });
  });//company - checked

  router.post('/airplane', function(req, res){
    console.log(req.body);
    const{tail_no,type,flight_hours,company,maxTOWeight,maxLandWeight,capacity,maxCargoWeight} = req.body;
    db.addAirplane(tail_no,type,flight_hours,company,maxTOWeight,maxLandWeight,capacity,maxCargoWeight).then(()=>{
      res.redirect('airplane.html');
    });
  });//airplane - checked

  router.post('/airport', function(req, res){
    console.log(req.body);
    const{airport_Code,city,country,airport_Name} = req.body;
    db.addAirport(airport_Code,city,country,airport_Name).then(()=>{
      res.redirect('admin.html');
    });
  });//admin - checked

  router.post('/pilot', function(req, res){
    console.log(req.body);
    const{employee_ID,fname,lname,company,flight_hours,position,flight_no} = req.body;
    db.addPilot(employee_ID,fname,lname,company,flight_hours,position,flight_no).then(()=>{
      res.redirect('company.html');
    });
  });//company - checked

  router.post('/company', function(req, res){
    console.log(req.body);
    const{name,location,phone} = req.body;
    db.addCompany(name,location,phone).then(()=>{
      res.redirect('company.html');
    });
  });//company - checked

  router.post('/maintEmpl', function(req, res){
    console.log(req.body);
    const{employee_ID,fname,lname,company} = req.body;
    db.addMaintEmpl(employee_ID,fname,lname,company).then(()=>{
      res.redirect('company.html');
    });
  });//company - checked

  router.post('/passenger', function(req, res){
    console.log(req.body);
    const{ssn,fname,lname,citizenOf} = req.body;
    db.addPassenger(ssn,fname,lname,citizenOf).then(()=>{
      res.redirect('passenger.html');
    });
  });//passenger - checked

  router.post('/insertRunway', function(req, res){
    console.log(req.body);
    const{airport_Code,runway_ID,length,status} = req.body;
    db.addRunway(airport_Code,runway_ID,length,status).then(()=>{
      res.redirect('airport.html');
    });
  });//airport - checked
  router.post('/updateRunway', function(req, res){
    console.log(req.body);
    const{airport_Code,runway_ID,length,open_Status} = req.body;
    db.updateRunway(airport_Code,runway_ID,length,open_Status).then(()=>{
      res.redirect('atc.html');
    });
  });//atc - checked

  router.post('/insertGate', function(req, res){
    console.log(req.body);
    const{section,gate_ID,company,airport_Code} = req.body;
    db.addGate(section,gate_ID,company,airport_Code).then(()=>{
      res.redirect('airport.html');
    });
  });//airport - chekced
  router.post('/updateGate', function(req, res){
    console.log(req.body);
    const{section,gate_ID,company,airport_Code} = req.body;
    db.updateGate(section,company,airport_Code).then(()=>{
      res.redirect('airport.html');
    });
  });//airport - checked

  router.post('/insertFrequency', function(req, res){
    console.log(req.body);
    const{frequency,freqType,airport_Code} = req.body;
    db.addFrequency(airport_Code,frequency,freqType).then(()=>{
      res.redirect('atc.html');
    });
  });//atc - checked
  router.post('/updateFrequency', function(req, res){
    console.log(req.body);
    const{frequency,freqType,airport_Code} = req.body;
    db.updateFrequency(airport_Code,frequency,freqType).then(()=>{
      res.redirect('atc.html');
    });
  });//atc - checked

  router.post('/insertFlightData', function(req, res){
    console.log(req.body);
    const{flight_no,to_weight,fuel,callsign} = req.body;
    db.addFlightData(flight_no,to_weight,fuel,callsign).then(()=>{
      res.redirect('flightData.html');
    });
  });//flightdata - checked
  router.post('/updateFlightData', function(req, res){
    console.log(req.body);
    const{flight_no,to_weight,fuel,callsign} = req.body;
    db.updateFlightData(flight_no,to_weight,fuel,callsign).then(()=>{
      res.redirect('flightData.html');
    });
  });//flightdata - checked

  router.post('/insertMaintWork', function(req, res){
    console.log(req.body);
    const{tail_no,work_date,work_type,employee_ID} = req.body;
    db.addMaintenance(tail_no,work_date,work_type,employee_ID).then(()=>{
      res.redirect('airplane.html');
    });
  });//airplane - checked
  router.post('/updateMaintWork', function(req, res){
    console.log(req.body);
    const{tail_no,work_date,employee_ID} = req.body;
    db.updateMaintenance(tail_no,work_date,employee_ID).then(()=>{
      res.redirect('airplane.html');
    });
  });//airplane - checked

  router.post('/buyTicket', function(req, res){
    console.log(req.body);
    const{flight_no,seatClass,ssn} = req.body;
    db.buyTicket(flight_no,seatClass,ssn).then(()=>{
      res.redirect('flight.html');
    });
  });//flights checked

  router.post('/addBaggage', function(req, res){
    console.log(req.body);
    const{flight_no,ticket_no,weight} = req.body;
    db.addBaggage(flight_no,ticket_no,weight).then(()=>{
      res.redirect('passenger.html');
    });
  });//passenger checked
  router.post('/updateBaggage', function(req, res){
    console.log(req.body);
    const{bag_no,weight} = req.body;
    db.updateBaggage(bag_no,weight).then(()=>{
      res.redirect('passenger.html');
    });
  });//passenger checked

  //------------------------GETS FOR SELECT-------------------------------------
  router.get('/flights', function(req, res){
    console.log("test");
		db.getFlights().then(function(field){
      //console.log(JSON.stringify(field));
			res.json(field);
		});
	});//checked

  router.get('/airplanes', function(req, res){
		db.getAirplanes().then(function(field){
      console.log(JSON.stringify(field));
			res.json(field);
		});
	});//checked

  router.get('/airports', function(req, res){
		db.getAirports().then(function(field){
      //console.log(JSON.stringify(field));
			res.json(field);
		});
	});//checked

  router.get('/pilots', function(req, res){
		db.getPilots().then(function(field){
      //console.log(JSON.stringify(field));
			res.json(field);
		});
	});//checked
  router.get('/companies', function(req, res){
		db.getCompanies().then(function(field){
      //console.log(JSON.stringify(field));
			res.json(field);
		});
	});//checked
  router.get('/maint_empl', function(req, res){
		db.getEmployees().then(function(field){
      //console.log(JSON.stringify(field));
			res.json(field);
		});
	});//checked
/*
  router.get('/open_runways', function(req, res){
		db.getOpenRunways().then(function(field){
      //console.log(JSON.stringify(field));
			res.json(field);
		});
	});//checked
  router.get('/closed_runways', function(req, res){
		db.getClosedRunways().then(function(field){
      //console.log(JSON.stringify(field));
			res.json(field);
		});
	});//checked
*/
  router.post('/specificRunway', function(req, res){
    //console.log(req.body);
    const{airport_Code} = req.body;
    db.getAirportRunways(airport_Code).then(function(result){
      //console.log(JSON.stringify(field));
      var statement = "Airport | Runway | Length | Status<br>";
      for(i=0;i<result.length;i++){
        statement+= result[i].Airport_Code+"    |"+
          "  "+ result[i].Runway_ID+"   |"+
          " "+ result[i].Length+" |"+
          " "+ result[i].Open_Status+"<br>";
      }
      res.send(statement);
    });
  });//done
  router.post('/specificGates', function(req, res){
    //console.log(req.body);
    const{airport_Code} = req.body;
    db.getAirportGates(airport_Code).then(function(result){
      //console.log(JSON.stringify(field));
      var statement = "Airport | Section | Gate Number | Company<br>";
      for(i=0;i<result.length;i++){
        statement+= result[i].Airport_Code+" | "+
                    result[i].Section+" | "+
                    result[i].Gate_ID+" | "+
                    result[i].Company+"<br>";
      }
      res.send(statement);
    });
  });//done
  router.post('/specificAirportFlights', function(req, res){
    //console.log(req.body);
    const{airport_Code} = req.body;
    db.getAirportFlights(airport_Code).then(function(result){
      //console.log(JSON.stringify(field));
      var statement = "Flight_no | Tail_no | Origin | Destination  | Takeoff Time | Lane Time | Seats Left<br>";
      for(i=0;i<result.length;i++){
        statement+= result[i].Flight_no+" | "+
                    result[i].Tail_no+" | "+
                    result[i].Origin+" | "+
                    result[i].Dest+" | "+
                    result[i].TO_Time+" | "+
                    result[i].Land_Time+" | "+
                    result[i].Seats+"<br>";
      }
      res.send(statement);
    });
  });//done

  router.post('/maintHistory', function(req, res){
    //console.log(req.body);
    const{tail_no} = req.body;
    db.getMaintHistory(tail_no).then(function(result){
      //console.log(JSON.stringify(field));
      var statement = "Tail_no | Work Date | Work Type | Employee ID<br>";
      for(i=0;i<result.length;i++){
        statement+= result[i].Tail_no+" | "+
                    result[i].Work_date+" | "+
                    result[i].Work_type+" | "+
                    result[i].Employee_ID+"<br>";
      }
      res.send(statement);
    });
  });//done

  router.post('/airportFreqs', function(req, res){
    //console.log(req.body);
    const{airport_Code} = req.body;
    db.getAirportFreqs(airport_Code).then(function(result){
      //console.log(JSON.stringify(field));
      var statement = "Airport | Frequency | Frequency Type<br>";
      for(i=0;i<result.length;i++){
        statement+= result[i].Airport_Code+" | "+
                    result[i].Frequency+" | "+
                    result[i].FreqType+"<br>";
      }
      res.send(statement);
    });
  });//done
  router.post('/incoming', function(req, res){
    //console.log(req.body);
    const{airport_Code} = req.body;
    db.getIncoming(airport_Code).then(function(result){
      //console.log(JSON.stringify(field));
      var statement = "Flight_no | Tail_no | Origin | Destination  | Takeoff Time | Lane Time | Seats Left<br>";
      for(i=0;i<result.length;i++){
        statement+= result[i].Flight_no+" | "+
                    result[i].Tail_no+" | "+
                    result[i].Origin+" | "+
                    result[i].Dest+" | "+
                    result[i].TO_Time+" | "+
                    result[i].Land_Time+" | "+
                    result[i].Seats+"<br>";
      }
      res.send(statement);
    });
  });//needs formatting
  router.post('/outgoing', function(req, res){
    //console.log(req.body);
    const{airport_Code} = req.body;
    db.getOutgoing(airport_Code).then(function(result){
      //console.log(JSON.stringify(field));
      var statement = "Flight_no | Tail_no | Origin | Destination  | Takeoff Time | Lane Time | Seats Left<br>";
      for(i=0;i<result.length;i++){
        statement+= result[i].Flight_no+" | "+
                    result[i].Tail_no+" | "+
                    result[i].Origin+" | "+
                    result[i].Dest+" | "+
                    result[i].TO_Time+" | "+
                    result[i].Land_Time+" | "+
                    result[i].Seats+"<br>";
      }
      res.send(statement);
    });
  });//needs formatting

  router.post('/companyAircraft', function(req, res){
    //console.log(req.body);
    const{company} = req.body;
    db.getCompanyCraft(company).then(function(result){
      //console.log(JSON.stringify(field));
      var statement = "Tail_no | Plane Type | Flight Hours | Company | Max TO Weight | Max Land Weight | Capacity | Max Cargo Weight<br>";
      for(i=0;i<result.length;i++){
        statement+= result[i].Tail_no+" | "+
                    result[i].Plane_type+" | "+
                    result[i].Flight_hours+" | "+
                    result[i].Company+" | "+
                    result[i].MaxToWeight+" | "+
                    result[i].MaxLandWeight+
                    result[i].Capacity+" | "+
                    result[i].MaxCargoWeight+"<br>";
      }
      res.send(statement);
    });
  });//needs formatting

  router.post('/getFlightData', function(req, res){
    //console.log(req.body);
    const{flight_no} = req.body;
    db.getFlightData(flight_no).then(function(result){
      //console.log(JSON.stringify(field));
      var statement = "Flight_no | Takeoff Weight | Fuel | Callsign<br>";
      for(i=0;i<result.length;i++){
        statement+= result[i].Flight_no+" | "+
                    result[i].TO_weight+" | "+
                    result[i].Fuel+" | "+
                    result[i].Callsign+"<br>";
      }
      res.send(statement);
    });
  });//needs formatting

  router.post('/getTickets', function(req, res){
    //console.log(req.body);
    const{ssn} = req.body;
    db.getTickets(ssn).then(function(result){
      //console.log(JSON.stringify(field));
      var statement = "Flight Number | Ticket Number | Seat Class<br>";
      for(i=0;i<result.length;i++){
        statement+= result[i].Flight_no+" | "+
                    result[i].Ticket_no+" | "+
                    result[i].Class+"<br>";
      }
      res.send(statement);
    });
  });//needs formatting

  return router;
}
