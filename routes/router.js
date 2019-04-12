const router = require('express').Router();
const dbedits = new TableEdits();

module.exports = function(){
  router.post('/flights', function(req, res){
    console.log(req.body);
    const{flight_no,tail_no,origin,dest,to_time,land_time,seats} = req.body;
    dbedits.addFlight(flight_no,tail_no,origin,dest,to_time,land_time,seats).then(()=>{
      res.redirect('/app/company.html');
    });
  });


}
