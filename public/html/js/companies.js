$(document).ready(function(){
  $.ajax('/companies', {
    method: 'GET',
    success: function(result){
      let companies = $('#companies');
      for(i=0;i<result.length;i++){
        $("<tr>"+
          "<td>"+ result[i].Company_Name+"</td>"+
          "<td>"+ result[i].Location+"</td>"+
          "<td>"+ result[i].Phone+"</td>"+
          "</tr>").appendTo(companies);
      }
    }
  })
})
