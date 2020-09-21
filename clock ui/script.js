
 //noor nav imad driv
//  $(createbutton).on("click",function(){
  
//   $('body').append("<button id='button1'>button1</button>") 

//  })

//  $(createinputtext).on("click",function(){
  
//   $('body').append("<input type='text' name='inputtext1'>") 

//  })

 $(change).on('click',function(){

    var col=$(changecolor).val();

    $(dot).css('border-color',col)




 })

 $(change1).on('click',function(){

    var img=$(changeimg).val();
    
    $("body").css("background-image",`url(${img})`)

    
 
    
 })
//imad nav noot driv
var dt=new Date()
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
$('#timeon').text(time)

setInterval(function(){
var dt=new Date()
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
$('#timeon').text(time)
},1000);
// $(ss).appendTo("<p id='minutes'></p>")
// $(ss).appendTo("<p id='hours'></p>")

var count=0
var min=0
var hourss=0
$(start).on("click",function(){
	var setinterval=setInterval(function(){
    count+=1
    if(count===60){
    console.log("worked")
    count=0
    min++
    }
    if(min===60){
    	min=0
    	hourss++
    }
    $('#seconds').text(count)
    $(minutes).text(min)
    $(hours).text(hourss)
	},1000)
})
$(stop).on('click',function(){
	count=0
	min=0
	hourss=0
})













// var count=0

// function startTime(){
// count+=100
// $('#timer').text(count)
// };

// $(start).on("click",setInterval(startTime(),1))

//// Noor Nav and imad nav
$(wisdom).on('click',function(){

 var array=[ "'No one can make you feel inferior without your consent.'"
,"'May you live every day of your life.'","'Knowing yourself is the beginning of all wisdom'","'The only true wisdom is in knowing you know nothing'"]
 
  var onewis=array[Math.floor(Math.random()*array.length)]

  $(wis).text(onewis)
  $(wisdom).hide()
})
