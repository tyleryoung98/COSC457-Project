$(document).ready(function(){
  $.ajax('/pilots', {
    method: 'GET',
    success: function(result){
      let pilots = $('#pilots');
      for(i=0;i<result.length;i++){
        $("<tr>"+
          "<td>"+ result[i].Employee_ID+"</td>"+
          "<td>"+ result[i].Fname+"</td>"+
          "<td>"+ result[i].Lname+"</td>"+
          "<td>"+ result[i].Company+"</td>"+
          "<td>"+ result[i].Flight_hours+"</td>"+
          "<td>"+ result[i].Title+"</td>"+
          "</tr>").appendTo(pilots);
      }
    }
  })
})
