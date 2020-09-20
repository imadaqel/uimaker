
 //noor nav imad driv
 $(createbutton).on("click",function(){
  
  $('body').append("<button id='button1'>button1</button>") 

 })

 $(createinputtext).on("click",function(){
  
  $('body').append("<input type='text' name='inputtext1'>") 

 })

 $(change).on('click',function(){

    var col=$(changecolor).val();

    $("body").css('background-color',col)


 })

 $(change1).on('click',function(){

    var img=$(changeimg).val();
    
    $("body").css("background-image",`url(${img})`)


 
    
})
