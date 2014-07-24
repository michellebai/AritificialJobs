
$(document).ready(function(){

    readData();
    var topic=[]; 

    //read Json file 
    function readData(){
        $.ajax({
          type: 'GET',    
          url: "./QA1.json",         
          contentType : "application/json; charset=utf-8",
          dataType : "json",
          crossDomain: true,         
          success: function(result){
                $.each(result,function(i){
                    
                    topic.push({
                        question:result[i].question, 
                        ans:result[i].ans
                    });
                })

                $.each(topic,function(i){
                     console.log(topic[i].question);
                })
               
          },
           error:function(jqXHR, textStatus, errorThrown){
            alert(errorThrown);
          }
        });
    }

    $('#submit_bt').on('click',function(){
        var input=$("#input_text").val();
        
        $.when(lingpipe(input))
        .done(function(data){
            /*-- To do --*/
            $.each(data,function(i){

                 var word = data[i];
                 $.each(topic,function(i){
                    var question=topic[i].question;
                    // console.log(topic[i].ans);
                    var match=question.match(word);
                    console.log("Ans:"+match);
                    return false;
                })      
            })
            /*----*/
        });
        
    })

    function lingpipe(key){
        
        var result_arr=[];
        $.ajax({

          type: 'GET',    
          url: "./StringSplit.php?str="+key,      
          contentType : "application/json; charset=utf-8",
          dataType: "json",   
          
          async:false,
          
                
          success: function(result){
                // console.log("result:"+result);
                var arr = JSON.parse(JSON.stringify( result )); 
                $.each(arr,function(i){
                        // console.log(arr[i]);
                        result_arr.push(arr[i]);
                 })

               
          },
          error:function(jqXHR, textStatus, errorThrown){
            alert(errorThrown);
          }
        });

        console.log("result: "+result_arr);
        return result_arr; // return result arr
    }

    

});

