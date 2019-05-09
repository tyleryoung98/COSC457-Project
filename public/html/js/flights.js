$(document).ready(function(){
  $.ajax('/flights', {
    method: 'GET',
    success: function(result){
      let flights = $('#flights');
      for(i=0;i<result.length;i++){
        $("<tr>"+
          "<td>"+ result[i].Flight_no+"</td>"+
          "<td>"+ result[i].Tail_no+"</td>"+
          "<td>"+ result[i].Origin+"</td>"+
          "<td>"+ result[i].Dest+"</td>"+
          "<td>"+ result[i].TO_Time+"</td>"+
          "<td>"+ result[i].Land_Time+"</td>"+
          "<td>"+ result[i].Seats+"</td>"+
          "</tr>").appendTo(flights);
      }
    }
  })
})
