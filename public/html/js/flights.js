$(document).ready(function(){
  $.ajax('/flights', {
    method: 'GET',
    success: function(field){
      let flights = $('#flights');
      for(flight of field){
        $("<tr>"+
          "<td>"+ flight.flight_no+"</td>"+
          "<td>"+ flight.tail_no+"</td>"+
          "<td>"+ flight.origin+"</td>"+
          "<td>"+ flight.dest+"</td>"+
          "<td>"+ flight.to_time+"</td>"+
          "<td>"+ flight.land_time+"</td>"+
          "<td>"+ flight.seats+"</td>"+
          "</tr>").appendTo(flights);
      }
    }
  })
})
