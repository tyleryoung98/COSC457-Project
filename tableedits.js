const sql = require("mysql");

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
                " ELSE INSERT INTO FLIGHTS (flight_no, tail_no, origin, dest, to_time, land_time, seats)"
                                    +" VALUES ("+flight_no+","+tail_no
                                    +","+origin+","+dest
                                    +","+to_time+","+land_time
                                    +","+seats+")";
      sql.query(quer, function(err, result){
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
      var quer= "IF EXISTS (select * from AIRPLANE where tail_no="+tail_no+")"+
                "ELSE INSERT INTO FLIGHTS (tail_no,type,flight_hours,company,maxTOWeight,maxLandWeight,capacity,maxCargoWeight)"
                                    +" VALUES ("+tail_no+","+type+","+flight_hours
                                    +","+company+","+maxTOWeight
                                    +","+maxLandWeight+","+capacity
                                    +","+maxCargoWeight+")";
      sql.query(quer, function(err, result){
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

}
