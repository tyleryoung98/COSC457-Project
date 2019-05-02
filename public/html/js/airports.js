$(document).ready(function(){
  $.ajax('/airports', {
    method: 'GET',
    success: function(result){
      let airports = $('#airports');
      for(i=0;i<result.length;i++){
        $("<tr>"+
          "<td>"+ result[i].Airport_Code+"</td>"+
          "<td>"+ result[i].City+"</td>"+
          "<td>"+ result[i].Country+"</td>"+
          "<td>"+ result[i].Airport_Name+"</td>"+
          "</tr>").appendTo(airports);
      }
    }
  })
})
