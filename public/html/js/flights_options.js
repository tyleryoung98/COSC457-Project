$(document).ready(function(){
  $.ajax('/flights', {
    method: 'GET',
    success: function(result){
      let flights = $('#flights_options');
      for(i=0;i<result.length;i++){
        console.log("<option value=\""+ result[i].Flight_no+"\">"+
        result[i].Flight_no+"</option>");
        $("<option value=\""+ result[i].Flight_no+"\">"+
        result[i].Flight_no+"</option>").appendTo(flights);
      }
    }
  })
})
