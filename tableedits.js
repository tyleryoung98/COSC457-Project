const sql = require("mysql");

module.exports = class TableEdits{
  addFlight(flight_no,tail_no,origin,dest,to_time,land_time,seats){
    return new Promise((resolve, reject)=> {
      var quer= "IF EXISTS (select * from FLIGHTS where flight_no="+flight_no+")"+
                "ELSE INSERT INTO FLIGHTS (flight_no, tail_no, origin, dest, to_time, land_time, seats)"
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


}
