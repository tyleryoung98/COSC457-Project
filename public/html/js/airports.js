$(document).ready(function(){
  $.ajax('/airports', {
    method: 'GET',
    success: function(result){
      let airports = $('#airports');
      var count =0;
      console.log("checkpoint 3");
      for(airport of result){
        $("<tr>"+
          "<td>"+ airport[count].Airport_Code+"</td>"+
          "<td>"+ airport[count].City+"</td>"+
          "<td>"+ airport[count].Country+"</td>"+
          "<td>"+ airport[count].Airport_Name+"</td>"+
          "</tr>").appendTo(airports);
          count+=1;
      }
    }
  })
})
