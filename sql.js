const sql = require("mysql");

const con = sql.createConnection(process.env.JAWSDB_URL);
con.connect(function(err) {
  if(err) throw err;
  console.log('Connected to MySQL');
});

module.exports = class TableEdits{
//--------------------FLIGHTS UPDATE/INSERT---------------------------
  addFlight(flight_no,tail_no,origin,dest,to_time,land_time,seats){
    return new Promise((resolve, reject)=> {
      var quer= "IF EXISTS (select * from FLIGHTS where flight_no="+flight_no+") "+
                "UPDATE FLIGHTS SET tail_no="+tail_no+","+
                                    "origin="+origin+","+
                                    "dest="+dest+","+
                                    "to_time="+to_time+","+
                                    "land_time="+land_time+","+
                                    "seats="+seats+
                                    "where flight_no="+flight_no+
                " ELSE INSERT INTO FLIGHTS (flight_no, tail_no, origin, dest,"
                                            +" to_time, land_time, seats)"
                                    +" VALUES ("+flight_no+","+tail_no
                                    +","+origin+","+dest
                                    +","+to_time+","+land_time
                                    +","+seats+")";
      con.query(quer, function(err, result){
        if(err){
          console.log("Failed to insert into FLIGHTS");
          reject();
        }
        else{
          console.log("Info inserted into FLIGHTS");
          resolve();
        }
      });
    });
  }

//-------------------------AIRPLANE UPDATE/INSERT---------------------------------------
  addAirplane(tail_no,type,flight_hours,company,maxTOWeight,maxLandWeight,capacity,maxCargoWeight){
    return new Promise((resolve, reject)=> {
      var quer= "IF EXISTS (select * from AIRPLANE where Tail_no="+tail_no+") "+
                          "UPDATE AIRPLANE SET Plane_type="+type+","+
                          "Flight_hours="+flight_hours+","+
                          "Company="+company+","+
                          "MaxTOWeight="+maxTOWeight+","+
                          "MaxLandWeight="+maxLandWeight+","+
                          "Capacity="+capacity+
                          "MaxCargoWeight="+maxCargoWeight+
                          "where Flight_no="+flight_no+
                " ELSE INSERT INTO AIRPLANE (Tail_no,Plane_type,Flight_hours,Company,"
                                            +"MaxTOWeight,MaxLandWeight,"
                                            +"Capacity,MaxCargoWeight)"
                                    +" VALUES ("+tail_no+","+type+","+flight_hours
                                    +","+company+","+maxTOWeight
                                    +","+maxLandWeight+","+capacity
                                    +","+maxCargoWeight+")";
      con.query(quer, function(err, result){
        if(err){
          console.log("Failed to insert into AIRPLANE");
          reject();
        }
        else{
          console.log("Info inserted into AIRPLANE");
          resolve();
        }
      });
    });
  }

//-------------------------RUNWAY UPDATE/INSERT---------------------------------------
  addRunway(airport_Code,runway_ID,length,status){
    return new Promise((resolve, reject)=> {
      var quer= "IF EXISTS (select * from RUNWAY where Airport_Code="+airport_Code+
                                                  " and Runway_ID="+runway_ID+") "+
                          "UPDATE RUNWAY SET Open_Status="+status+","+
                " ELSE INSERT INTO RUNWAY (Airport_Code,Runway_ID,Length,Open_Status)"
                                +" VALUES ("+airport_Code+","+runway_ID
                                +","+length+","+status+")";
      con.query(quer, function(err, result){
        if(err){
          console.log("Failed to insert into RUNWAY");
          reject();
        }
        else{
          console.log("Info inserted into RUNWAY");
          resolve();
        }
      });
    });
  }

//-------------------------GATE UPDATE/INSERT---------------------------------------
  addGate(section,gate_ID,company,airport_Code){
    return new Promise((resolve, reject)=> {
      var quer= "IF EXISTS (select * from GATE where Airport_Code="+airport_Code+
                                                  " and Gate_ID="+gate_ID+
                                                  " and Section="+section+") "+
                          "UPDATE GATE SET Company="+company+
                " ELSE INSERT INTO GATE (Airport_Code,Section,Gate_ID,Company)"
                                +" VALUES ("+airport_Code+","+section+","+gate_ID
                                +","+company+")";
      con.query(quer, function(err, result){
        if(err){
          console.log("Failed to insert into GATE");
          reject();
        }
        else{
          console.log("Info inserted into GATE");
          resolve();
        }
      });
    });
  }

//-------------------------PILOT UPDATE/INSERT---------------------------------------
  addPilot(employee_ID,name,company,flight_hours,position,flight_no){
    return new Promise((resolve, reject)=> {
      var quer= "IF EXISTS (select * from PILOT where employee_ID="+employee_ID+") "+
                          "UPDATE PILOT SET name="+name+","+
                                            "company="+company+","+
                                            "flight_hours="+flight_hours+","+
                                            "position="+position+","+
                                            "flight_no="+flight_no+","+
                " ELSE INSERT INTO PILOT (employee_ID,name,company,flight_hours,"
                                          +"position,flight_no)"
                                +" VALUES ("+employee_ID+","+name
                                +","+company+","+flight_hours
                                +","+position+","+flight_no+")";
      con.query(quer, function(err, result){
        if(err){
          console.log("Failed to insert into PILOT");
          reject();
        }
        else{
          console.log("Info inserted into PILOT");
          resolve();
        }
      });
    });
  }

//-------------------------FLIGHT DATA UPDATE/INSERT---------------------------------------
  addFlightData(flight_no,to_weight,fuel,callsign){
    return new Promise((resolve, reject)=> {
      var quer= "IF EXISTS (select * from FLIGHTDATA where flight_no="+flight_no+") "+
                          "UPDATE FLIGHTDATA SET to_weight="+to_weight+","+
                                                "fuel="+fuel+","+
                                                "callsign="+callsign+
                " ELSE INSERT INTO FLIGHTDATA (flight_no,to_weight,fuel,callsign)"
                                +" VALUES ("+flight_no+","+to_weight
                                +","+fuel+","+callsign+")";
      con.query(quer, function(err, result){
        if(err){
          console.log("Failed to insert into FLIGHTDATA");
          reject();
        }
        else{
          console.log("Info inserted into FLIGHTDATA");
          resolve();
        }
      });
    });
  }
//******************************************************************************
//                            END OF UPDATE/INSERTS
//                            BEGINNING OF SELECTS
//******************************************************************************

//---------------------------------FLIGHTS GET----------------------------------
  getFlights(){
    return new Promise((resolve,reject) => {
      var quer= "SELECT * FROM FLIGHTS;"
      con.query(quer,function(err,result){
        if(err){
          console.log("Failed to select from FLIGHTS");
          reject();
        }
        else{
          console.log("Info selected from FLIGHTS");
          resolve(result);
        }
      });
    });
  }

  getAirplanes(){
    return new Promise((resolve,reject) => {
      var quer= "SELECT * FROM AIRPLANE;"
      con.query(quer,function(err,result){
        if(err){
          console.log("Failed to select from AIRPLANE");
          reject();
        }
        else{
          console.log("Info selected from AIRPLANE");
          resolve(result);
        }
      });
    });
  }

  getAirports(){
    return new Promise((resolve,reject) => {
      console.log("checkpoint 1");
      var quer= "SELECT * FROM AIRPORT;"
      con.query(quer,function(err,result){
        if(err){
          console.log("Failed to select from AIRPORT");
          reject();
        }
        else{
          console.log("Info selected from AIRPORT");
          console.log(result)
          resolve(result);
        }
      });
    });
  }
}
