const sql = require("mysql");

const con = sql.createConnection(process.env.JAWSDB_URL);
/*var con = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "COSC457db",
  database: "testing"
});*/
con.connect(function(err) {
  if(err) throw err;
  console.log('Connected to MySQL');
});

module.exports = class TableEdits{
//-------------------------FLIGHTS UPDATE/INSERT---------------------------------------
  addFlight(flight_no,tail_no,origin,dest,to_time,land_time,seats){
    return new Promise((resolve, reject)=> {
      var quer= "INSERT INTO FLIGHTS (Flight_no,Tail_no,Origin,Dest,"
                          +"TO_Time,Land_Time,Seats)"+
                " VALUES (\""+flight_no+"\",\""+tail_no+"\",\""+origin+"\",\""+dest+"\",\'"
                        +to_time+"\',\'"+land_time+"\',"+seats+")"+
                " ON DUPLICATE KEY UPDATE"+
                        " Tail_no=\""+tail_no+
                        "\", Origin=\""+origin+
                        "\", Dest=\""+dest+
                        "\", TO_Time=\'"+to_time+
                        "\', Land_Time=\'"+land_time+
                        "\', Seats="+seats+";";
      console.log(quer);
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
      var quer= "INSERT INTO AIRPLANE (Tail_no,Plane_type,Flight_hours,Company,"
                          +"MaxTOWeight,MaxLandWeight,Capacity,MaxCargoWeight)"+
                " VALUES (\""+tail_no+"\",\""+type+"\","+flight_hours+",\""+company+"\","
                        +maxTOWeight+","+maxLandWeight+","+capacity+","+maxCargoWeight+")"+
                " ON DUPLICATE KEY UPDATE"+
                        " Plane_type=\""+type+
                        "\", Flight_hours="+flight_hours+
                        ", Company=\""+company+
                        "\", MaxTOWeight="+maxTOWeight+
                        ", MaxLandWeight="+maxLandWeight+
                        ", Capacity="+capacity+
                        ", MaxCargoWeight="+maxCargoWeight+";";
      console.log(quer);
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

//-------------------------AIRPORT UPDATE/INSERT---------------------------------------
  addAirport(airport_Code,city,country,name){
    return new Promise((resolve, reject)=> {
      var quer= "INSERT INTO AIRPORT (Airport_Code,City,Country,Airport_Name)"+
                " VALUES (\""+airport_Code+"\",\""+city+"\",\""+country+"\",\""+name+"\")"+
                " ON DUPLICATE KEY UPDATE"+
                        " City=\""+city+
                        "\", Country=\""+country+
                        "\", Airport_Name=\""+name+"\";";
      con.query(quer, function(err, result){
        if(err){
          console.log("Failed to insert into AIRPORT");
          reject();
        }
        else{
          console.log("Info inserted into AIRPORT");
          resolve();
        }
      });
    });
  }

//-------------------------COMPANY UPDATE/INSERT---------------------------------------
  addCompany(name,location,phone){
    return new Promise((resolve, reject)=> {
      var quer= "INSERT INTO COMPANY (Company_Name,Location,Phone)"+
                " VALUES (\""+name+"\",\""+location+"\",\""+phone+"\")"+
                " ON DUPLICATE KEY UPDATE"+
                        " Location=\""+location+
                        "\", Phone=\""+phone+"\";";
      con.query(quer, function(err, result){
        if(err){
          console.log("Failed to insert into COMPANY");
          reject();
        }
        else{
          console.log("Info inserted into COMPANY");
          resolve();
        }
      });
    });
  }

//-------------------------PILOT UPDATE/INSERT---------------------------------------
  addPilot(employee_ID,fname,lname,company,flight_hours,position,flight_no){
    return new Promise((resolve, reject)=> {
      var quer1= "SELECT COUNT(*) as count FROM PILOT;"
      con.query(quer1, function(err, result1){
        if(err){
          console.log("Failed to get employee count");
          reject();
        }
        else{
          var employee_ID = result1[0].count+1;
          var quer2= "INSERT INTO PILOT (Employee_ID,Fname,Lname,Company,"
                              +"Flight_hours,Title,Flight_no)"+
                    " VALUES (\""+employee_ID+"\",\""+fname+"\",\""+lname+"\",\""+company+"\","
                            +flight_hours+",\""+position+"\",\""+flight_no+"\")"+
                    " ON DUPLICATE KEY UPDATE"+
                            " Fname=\""+fname+
                            "\", Lname=\""+lname+
                            "\", Company=\""+company+
                            "\", Flight_hours="+flight_hours+
                            ", Title=\""+position+
                            "\", Flight_no=\""+flight_no+"\";";
          console.log(quer2);
          con.query(quer2, function(err, result2){
            if(err){
              console.log("Failed to insert into PILOT");
              reject();
            }
            else{
              console.log("Info inserted into PILOT");
              resolve();
            }
          });
        }
      });
    });
  }

//-------------------------MAINTENANCE EMPLOYEE UPDATE/INSERT---------------------------------------
  addMaintEmpl(employee_ID,fname,lname,company){
    return new Promise((resolve, reject)=> {
      var quer1= "SELECT COUNT(*) as count FROM MAINTENANCE_EMPLOYEE;"
      con.query(quer1, function(err, result1){
        if(err){
          console.log("Failed to get employee count");
          reject();
        }
        else{
          var employee_ID = result1[0].count+1;
          var quer2= "INSERT INTO MAINTENANCE_EMPLOYEE (Employee_ID,Fname,Lname,Company)"+
                    " VALUES (\""+employee_ID+"\",\""+fname+"\",\""+lname+"\",\""+company+"\")"+
                    " ON DUPLICATE KEY UPDATE"+
                            " Fname=\""+fname+
                            "\", Lname=\""+lname+
                            "\", Company=\""+company+"\";";
          con.query(quer2, function(err, result){
            if(err){
              console.log("Failed to insert into MAINTENANCE_EMPLOYEE");
              reject();
            }
            else{
              console.log("Info inserted into MAINTENANCE_EMPLOYEE");
              resolve();
            }
          });
        }
      });
    });
  }

//-------------------------PASSENGER UPDATE/INSERT---------------------------------------
  addPassenger(ssn,fname,lname,citizenOf){
    return new Promise((resolve, reject)=> {
      var quer= "INSERT INTO PASSENGER (Ssn,Fname,Lname,CitizenOf)"+
                " VALUES (\""+ssn+"\",\""+fname+"\",\""+lname+"\",\""+citizenOf+"\")"+
                " ON DUPLICATE KEY UPDATE"+
                        " Fname=\""+fname+
                        "\", Lname=\""+lname+
                        "\", CitizenOf=\""+citizenOf+"\";";
      con.query(quer, function(err, result){
        if(err){
          console.log("Failed to insert into PASSENGER");
          reject();
        }
        else{
          console.log("Info inserted into PASSENGER");
          resolve();
        }
      });
    });
  }

//-------------------------RUNWAY UPDATE/INSERT---------------------------------------
  addRunway(airport_Code,runway_ID,length,status){
  return new Promise((resolve, reject)=> {
    var quer= "INSERT INTO RUNWAY (Airport_Code,Runway_ID,Length,Open_Status)"
                              +" VALUES (\""+airport_Code+"\",\""+runway_ID+"\","+length
                              +",\""+status+"\");";
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
  updateRunway(airport_Code,runway_ID,length,status){
  return new Promise((resolve, reject)=> {
    var quer= "UPDATE RUNWAY SET Length="+length+","+"Open_Status=\""+status+
              "\" WHERE Runway_ID=\""+runway_ID+
                      "\" AND Airport_Code=\""+airport_Code+"\";";
    console.log(quer);
    con.query(quer, function(err, result){
      if(err){
        console.log("Failed to update RUNWAY");
        reject();
      }
      else{
        console.log("Info updated for RUNWAY");
        resolve();
      }
    });
  });
}

//-------------------------GATE UPDATE/INSERT---------------------------------------
  addGate(section,gate_ID,company,airport_Code){
    return new Promise((resolve, reject)=> {
      var quer= "INSERT INTO GATES (Airport_Code,Section,Gate_ID,Company)"
                                +" VALUES (\""+airport_Code+"\",\""+section+"\","+gate_ID
                                +",\""+company+"\");";
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
  updateGate(section,company,airport_Code){
    return new Promise((resolve, reject)=> {
      var quer= "UPDATE GATES SET Company=\""+company+
                "\" WHERE Section=\""+section+
                        "\" AND Airport_Code=\""+airport_Code+"\";";
      con.query(quer, function(err, result){
        if(err){
          console.log("Failed to update GATE");
          reject();
        }
        else{
          console.log("Info updated for GATE");
          resolve();
        }
      });
    });
  }

//-------------------------FLIGHT DATA UPDATE/INSERT---------------------------------------
  addFlightData(flight_no,to_weight,fuel,callsign){
    return new Promise((resolve, reject)=> {
      var quer= "INSERT INTO FLIGHTDATA (flight_no,to_weight,fuel,callsign)"
                                +" VALUES (\""+flight_no+"\","+to_weight
                                +","+fuel+",\""+callsign+"\");";
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
  updateFlightData(flight_no,to_weight,fuel,callsign){
    return new Promise((resolve, reject)=> {
      var quer= "UPDATE FLIGHTDATA SET TO_weight="+to_weight+","+
                                        "Fuel="+fuel+","+
                                        "Callsign=\""+callsign+
                "\" WHERE Flight_no=\""+flight_no+"\";";
      con.query(quer, function(err, result){
        if(err){
          console.log("Failed to update FLIGHTDATA");
          reject();
        }
        else{
          console.log("Info updated for FLIGHTDATA");
          resolve();
        }
      });
    });
  }

//-------------------------FREQUENCIES UPDATE/INSERT---------------------------------------
  addFrequency(airport_Code,frequency,freqType){
    return new Promise((resolve, reject)=> {
      var quer= "INSERT INTO FREQUENCIES (Airport_Code,Frequency,FreqType)"
                                +" VALUES (\""+airport_Code+"\","+frequency+",\""+freqType+"\");";
      console.log(quer);
      con.query(quer, function(err, result){
        if(err){
          console.log("Failed to insert into FREQUENCIES");
          reject();
        }
        else{
          console.log("Info inserted into FREQUENCIES");
          resolve();
        }
      });
    });
  }
  updateFrequency(airport_Code,frequency,freqType){
    return new Promise((resolve, reject)=> {
      var quer= "UPDATE FREQUENCIES SET Frequency="+frequency+
                " WHERE Airport_Code=\""+airport_Code+
                    "\" AND FreqType=\""+freqType+"\";";
      con.query(quer, function(err, result){
        if(err){
          console.log("Failed to update FREQUENCIES");
          reject();
        }
        else{
          console.log("Info updated for FREQUENCIES");
          resolve();
        }
      });
    });
  }

//-------------------------MAINTENANCE UPDATE/INSERT---------------------------------------
  addMaintenance(tail_no,work_date,work_type,employee_ID){
    return new Promise((resolve, reject)=> {
      var quer= "INSERT INTO MAINTENANCE (Tail_no,Work_date,Work_type,Employee_ID)"
                                +" VALUES (\""+tail_no+"\",\'"+work_date+"\',\""
                                            +work_type+"\",\""+employee_ID+"\");";
      console.log(quer);
      con.query(quer, function(err, result){
        if(err){
          console.log("Failed to insert into MAINTENANCE");
          reject();
        }
        else{
          console.log("Info inserted into MAINTENANCE");
          resolve();
        }
      });
    });
  }
  updateMaintenance(tail_no,work_date,employee_ID){
    return new Promise((resolve, reject)=> {
      var quer= "UPDATE MAINTENANCE SET Work_date=\'"+work_date+
                "\' WHERE Tail_no=\""+tail_no+
                    "\" AND Employee_ID=\""+employee_ID+"\";";
      con.query(quer, function(err, result){
        if(err){
          console.log("Failed to update MAINTENANCE");
          reject();
        }
        else{
          console.log("Info updated for MAINTENANCE");
          resolve();
        }
      });
    });
  }

//-------------------------BAGGAGE UPDATE/INSERT---------------------------------------
  addBaggage(flight_no,ticket_no,weight){
    return new Promise((resolve, reject)=> {
      var quer1= "SELECT COUNT(*) as count FROM BAGGAGE;"
      con.query(quer1, function(err, result1){
        if(err){
          console.log("Failed to get bag count");
          reject();
        }
        else{
          var bags = result1[0].count+1;
          //console.log(bags);
          var quer2= "INSERT INTO BAGGAGE (Flight_no,Ticket_no,Bag_number,Weight)"+
                    " VALUES (\""+flight_no+"\",\""+ticket_no+"\","+bags+","+weight+");";
          console.log(quer2);
          con.query(quer2, function(err, result){
            if(err){
              console.log("Failed to insert into BAGGAGE");
              reject();
            }
            else{
              console.log("Info inserted into BAGGAGE");
              var quer3= "UPDATE FLIGHTDATA SET TO_weight=TO_weight+"+weight+
                          " WHERE Flight_no=\""+flight_no+"\";";
              con.query(quer3, function(err, result){
                if(err){
                  console.log("Failed to update to FLIGHTDATA");
                  reject();
                }
                else{
                  console.log("Updated FLIGHTDATA");
                  resolve();
                }
              });
            }
          });
        }
      });
    });
  }
  updateBaggage(bag_no,weight){
    return new Promise((resolve, reject)=> {
      var quer= "UPDATE BAGGAGE SET WEIGHT="+weight+
                " WHERE Bag_number="+bag_no+";";
      con.query(quer, function(err, result1){
        if(err){
          console.log("Failed to update BAGGAGE");
          reject();
        }
        else{
          console.log("Updated BAGGAGE")
          var quer2= "SELECT Flight_no FROM BAGGAGE"+
                    " WHERE Bag_number="+bag_no+";"
          con.query(quer2, function(err, result2){
            if(err){
              console.log("Failed to update BAGGAGE");
              reject();
            }
            else{
              console.log(result2);
              var quer3= "UPDATE FLIGHTDATA SET TO_weight=TO_weight+"+weight+
                          " WHERE Flight_no=\""+result2[0].Flight_no+"\";";
              con.query(quer3, function(err, result){
                if(err){
                  console.log("Failed to update to FLIGHTDATA");
                  reject();
                }
                else{
                  console.log("Updated FLIGHTDATA");
                  resolve();
                }
              });
            }
          });
        }
      });
    });
  }

//-------------------------BUYING TICKETS---------------------------------------
  buyTicket(flight_no,seatClass,ssn){
    return new Promise((resolve, reject)=> {
      //run query to get total tickets and then one after to insert that ticket number
      var quer1= "SELECT COUNT(*) as count FROM TICKETS;"
      con.query(quer1, function(err, result){
        if(err){
          console.log("Failed to get new ticket number");
          reject();
        }
        else{
          console.log(result[0].count);
          var ticket_no = result[0].count+1;
          console.log("Got ticket number" + ticket_no);
          var quer2= "INSERT INTO TICKETS (Ticket_no,Class,Ssn)"
                                    +" VALUES (\""+ticket_no+"\",\""+seatClass+"\",\""+ssn+"\");";
          con.query(quer2, function(err, result2){
            if(err){
              console.log("Failed to insert  into TICKETS");
              reject();
            }
            else{
              console.log("Inserted info into TICKETS");
              var quer3= "INSERT INTO SEATS (Flight_no,Ticket_no)"+
                              " VALUES (\""+flight_no+"\",\""+ticket_no+"\");"
              con.query(quer3, function(err, result){
                if(err){
                  console.log("Failed to add to SEATS");
                }
                else{
                  console.log("Inserted into SEATS");
                  var quer4= "UPDATE FLIGHTS SET Seats=Seats-1"+
                              " WHERE Flight_no=\""+flight_no+"\";";
                  con.query(quer4, function(err, result2){
                    if(err){
                      console.log("Failed to update FLIGHTS");
                      reject();
                    }
                    else{
                      console.log("Updated info of FLIGHTS");
                      resolve();
                    }
                  });
                }
              });
            }
          });
        }
      });
    });
  }

//******************************************************************************
//                            END OF UPDATE/INSERTS
//                            BEGINNING OF SELECTS
//******************************************************************************

  getFlights(){
    return new Promise((resolve,reject) => {
      var quer= "SELECT * FROM FLIGHTS GROUP BY Origin;";
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
      var quer= "SELECT * FROM AIRPLANE GROUP BY Company;";
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
      var quer= "SELECT * FROM AIRPORT;";
      con.query(quer,function(err,result){
        if(err){
          console.log("Failed to select from AIRPORT");
          reject();
        }
        else{
          console.log("Info selected from AIRPORT");
          //console.log(result)
          resolve(result);
        }
      });
    });
  }

  getPilots(){
    return new Promise((resolve,reject) => {
      var quer= "SELECT * FROM PILOT;";
      con.query(quer,function(err,result){
        if(err){
          console.log("Failed to select from PILOT");
          reject();
        }
        else{
          console.log("Info selected from PILOT");
          //console.log(result)
          resolve(result);
        }
      });
    });
  }
  getCompanies(){
    return new Promise((resolve,reject) => {
      var quer= "SELECT * FROM COMPANY;";
      con.query(quer,function(err,result){
        if(err){
          console.log("Failed to select from COMPANY");
          reject();
        }
        else{
          console.log("Info selected from COMPANY");
          //console.log(result)
          resolve(result);
        }
      });
    });
  }
  getEmployees(){
    return new Promise((resolve,reject) => {
      var quer= "SELECT * FROM MAINTENANCE_EMPLOYEE;";
      con.query(quer,function(err,result){
        if(err){
          console.log("Failed to select from MAINTENANCE_EMPLOYEE");
          reject();
        }
        else{
          console.log("Info selected from MAINTENANCE_EMPLOYEE");
          //console.log(result)
          resolve(result);
        }
      });
    });
  }
/*
  getOpenRunways(){
    return new Promise((resolve,reject) => {
      var quer= "SELECT * FROM RUNWAY WHERE Open_Status=\"Open\" GROUP BY Airport_Code;";
      con.query(quer,function(err,result){
        if(err){
          console.log("Failed to select from RUNWAY");
          reject();
        }
        else{
          console.log("Info selected from RUNWAY");
          //console.log(result)
          resolve(result);
        }
      });
    });
  }
  getClosedRunways(){
    return new Promise((resolve,reject) => {
      var quer= "SELECT * FROM RUNWAY WHERE Open_Status=\"Closed\" GROUP BY Airport_Code;";
      con.query(quer,function(err,result){
        if(err){
          console.log("Failed to select from RUNWAY");
          reject();
        }
        else{
          console.log("Info selected from RUNWAY");
          //console.log(result)
          resolve(result);
        }
      });
    });
  }
*/

  getAirportRunways(airport_Code){
    return new Promise((resolve,reject) => {
      var quer= "SELECT RUNWAY.* "+
                "FROM AIRPORT INNER JOIN RUNWAY ON AIRPORT.Airport_Code=RUNWAY.Airport_Code "+
                "WHERE RUNWAY.Airport_Code=\""+airport_Code+"\";";
      //console.log(quer);
      con.query(quer,function(err,result){
        if(err){
          console.log("Failed to select from RUNWAY");
          reject();
        }
        else{
          console.log("Info selected from RUNWAY");
          //console.log(result)
          resolve(result);
        }
      });
    });
  }
  getAirportGates(airport_Code){
    return new Promise((resolve,reject) => {
      var quer= "SELECT GATES.* "+
                "FROM AIRPORT INNER JOIN GATES ON AIRPORT.Airport_Code=GATES.Airport_Code "+
                "WHERE GATES.Airport_Code=\""+airport_Code+"\";";
      //console.log(quer);
      con.query(quer,function(err,result){
        if(err){
          console.log("Failed to select from GATES");
          reject();
        }
        else{
          console.log("Info selected from GATES");
          //console.log(result)
          resolve(result);
        }
      });
    });
  }
  getAirportFlights(airport_Code){
    return new Promise((resolve,reject) => {
      var quer= "SELECT * FROM FLIGHTS WHERE Origin=\""+airport_Code+"\";";
      //console.log(quer);
      con.query(quer,function(err,result){
        if(err){
          console.log("Failed to select from FLIGHTS");
          reject();
        }
        else{
          console.log("Info selected from FLIGHTS");
          //console.log(result)
          resolve(result);
        }
      });
    });
  }

  getMaintHistory(tail_no){
    return new Promise((resolve,reject) => {
      var quer= "SELECT * FROM MAINTENANCE WHERE Tail_no=\""+tail_no+"\";";
      //console.log(quer);
      con.query(quer,function(err,result){
        if(err){
          console.log("Failed to select from MAINTENANCE");
          reject();
        }
        else{
          console.log("Info selected from MAINTENANCE");
          //console.log(result)
          resolve(result);
        }
      });
    });
  }

  getAirportFreqs(airport_Code){
    return new Promise((resolve,reject) => {
      var quer= "SELECT * FROM FREQUENCIES WHERE Airport_Code=\""+airport_Code+"\";";
      //console.log(quer);
      con.query(quer,function(err,result){
        if(err){
          console.log("Failed to select from FREQUENCIES");
          reject();
        }
        else{
          console.log("Info selected from FREQUENCIES");
          //console.log(result)
          resolve(result);
        }
      });
    });
  }
  getIncoming(airport_Code){
    return new Promise((resolve,reject) => {
      var quer= "SELECT * FROM FLIGHTS WHERE Dest=\""+airport_Code+"\";";
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
  getOutgoing(airport_Code){
    return new Promise((resolve,reject) => {
      var quer= "SELECT * FROM FLIGHTS WHERE Origin=\""+airport_Code+"\";";
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

  getCompanyCraft(company){
    return new Promise((resolve,reject) => {
      var quer= "SELECT * FROM AIRPLANE WHERE Company=\""+company+"\";";
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

  getFlightData(flight_no){
    return new Promise((resolve,reject) => {
      var quer= "SELECT * FROM FLIGHTDATA WHERE Flight_no=\""+flight_no+"\";";
      con.query(quer,function(err,result){
        if(err){
          console.log("Failed to select from FLIGHTDATA");
          reject();
        }
        else{
          console.log("Info selected from FLIGHTDATA");
          resolve(result);
        }
      });
    });
  }

  getTickets(ssn){
    return new Promise((resolve,reject) => {
      var quer= "SELECT SEATS.*, TICKETS.Class "+
                "FROM SEATS INNER JOIN TICKETS ON SEATS.Ticket_no=TICKETS.Ticket_no "+
                "WHERE TICKETS.Ssn=\""+ssn+"\";";
      //console.log(quer);
      con.query(quer,function(err,result){
        if(err){
          console.log("Failed to select from SEATS and TICKETS");
          reject();
        }
        else{
          console.log("Info selected from SEATS and TICKETS");
          //console.log(result)
          resolve(result);
        }
      });
    });
  }

}
