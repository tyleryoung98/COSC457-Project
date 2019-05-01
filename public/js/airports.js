$(document).ready(function(){
  $.ajax('/airports', {
    method: 'GET',
    success: function(field){
      let airports = $('#airports');
      for(airport of field){
        $("<tr>"+
          "<td>"+ airport.Airport_Code+"</td>"+
          "<td>"+ airport.City+"</td>"+
          "<td>"+ airport.Country+"</td>"+
          "<td>"+ airport.Airport_Name+"</td>"+
          "</tr>").appendTo(airports);
      }
    }
  })
})
