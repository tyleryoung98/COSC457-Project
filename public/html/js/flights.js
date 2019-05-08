$(document).ready(function(){
  $.ajax('/flights', {
    method: 'GET',
    success: function(result){
      let flights = $('#flights');
      for(i=0;i<result.length;i++){{
        $("<tr>"+
          "<td>"+ result[i].flight_no+"</td>"+
          "<td>"+ result[i].tail_no+"</td>"+
          "<td>"+ result[i].origin+"</td>"+
          "<td>"+ result[i].dest+"</td>"+
          "<td>"+ result[i].to_time+"</td>"+
          "<td>"+ result[i].land_time+"</td>"+
          "<td>"+ result[i].seats+"</td>"+
          "</tr>").appendTo(flights);
      }
    }
  })
})
