$(document).ready(function(){
  $.ajax('/open_runways', {
    method: 'GET',
    success: function(result){
      let runways = $('#open_runways');
      for(i=0;i<result.length;i++){
        $("<tr>"+
          "<td>"+ result[i].Airport_Code+"</td>"+
          "<td>"+ result[i].Runway_ID+"</td>"+
          "<td>"+ result[i].Length+"</td>"+
          "</tr>").appendTo(runways);
      }
    }
  })
})
