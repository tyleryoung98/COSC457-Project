$(document).ready(function(){
  $.ajax('/maint_empl', {
    method: 'GET',
    success: function(result){
      let employee = $('#maint_empl');
      for(i=0;i<result.length;i++){
        $("<tr>"+
          "<td>"+ result[i].Employee_ID+"</td>"+
          "<td>"+ result[i].Fname+"</td>"+
          "<td>"+ result[i].Lname+"</td>"+
          "</tr>").appendTo(employee);
      }
    }
  })
})
