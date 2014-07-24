
$(document).ready(function(){

    readData();
    var topic=[];

    function readData(){

    	$.ajax({
          type: 'GET',    
          url: "./data.json",         
          contentType : "application/json; charset=utf-8",
          dataType : "json",
          crossDomain: true,         
          success: function(result){
                $.each(result,function(i){
                    
                    topic.push({
                        question: result[i].question, 
                        ans:  result[i].ans
                    });
                })

                $.each(topic,function(i){
                    console.log(topic[i].question);
                    console.log(topic[i].ans);
                })
                
          },
          error:function(jqXHR, textStatus, errorThrown){
            alert(errorThrown);
          }
        });
    }

});

