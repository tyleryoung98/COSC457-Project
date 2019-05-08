$(document).ready(function(){
  $.ajax('/airplanes', {
    method: 'GET',
    success: function(result){
      let airplanes = $('#airplanes');
      for(i=0;i<result.length;i++){
        $("<tr>"+
          "<td>"+ result[i].Tail_no+"</td>"+
          "<td>"+ result[i].Plane_type+"</td>"+
          "<td>"+ result[i].Flight_hours+"</td>"+
          "<td>"+ result[i].Company+"</td>"+
          "<td>"+ result[i].MaxTOWeight+"</td>"+
          "<td>"+ result[i].MaxLandWeight+"</td>"+
          "<td>"+ result[i].Capacity+"</td>"+
          "<td>"+ result[i].MaxCargoWeight+"</td>"+
          "</tr>").appendTo(airplanes);
      }
    }
  })
})
