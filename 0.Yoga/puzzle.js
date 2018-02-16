
'use strict';
var no1=document.getElementById('myAnimation_tl');
var no2=document.getElementById('myAnimation_tm');
var no3=document.getElementById('myAnimation_tr');
var no4=document.getElementById('myAnimation_ml');
var no5=document.getElementById('myAnimation_mm');
var no6=document.getElementById('myAnimation_mr');
var no7=document.getElementById('myAnimation_bl');
var no8=document.getElementById('myAnimation_bm');
var emt=document.getElementById('myAnimation_br');



//when start document
window.onload = function() {
	document.getElementById("btn").onclick()
	document.getElementById("Moves").innerHTML = count;			}

// restart button / suffle
var count =0
function restart(){
	count=0
	document.getElementById("Moves").innerHTML = count;			
	//shuffle fuction
	function shuffle(arr1) {
    var i = arr1.length, temp, index;
		// While there are elements in the array
    while (i > 0) {
		// Pick a random index
        index = Math.floor(Math.random() * i);
		// Decrease i by 1
        i--;
		// And swap the last element with it
        temp = arr1[i];
        arr1[i] = arr1[index];
        arr1[index] = temp;

    }
    return arr1;}

	var myArray = [1, 2, 3, 4, 5, 6, 7, 8];
	var newlist = shuffle(myArray); // [ 2,4,3,5,6,1,7]

	document.getElementById("myAnimation_tl").innerHTML = newlist[0];
	document.getElementById("myAnimation_tm").innerHTML = newlist[1];
	document.getElementById("myAnimation_tr").innerHTML = newlist[2];
	document.getElementById("myAnimation_ml").innerHTML = newlist[3];
	document.getElementById("myAnimation_mm").innerHTML = newlist[4];
	document.getElementById("myAnimation_mr").innerHTML = newlist[5];
	document.getElementById("myAnimation_bl").innerHTML = newlist[6];
	document.getElementById("myAnimation_bm").innerHTML = newlist[7];}


// Start time
	var date = new Date;
	var seconds = date.getSeconds();
	var minutes = date.getMinutes();
	var hour = date.getHours();
	var StartTime = hour+":" +minutes+":"+ seconds;
	document.getElementById("StartTime").innerHTML = StartTime;

// End time
	var date = new Date;
	var seconds = date.getSeconds();
	var minutes = date.getMinutes();
	var hour = date.getHours();
	var EndTime = hour+":" +minutes+":"+ seconds;
// 	document.getElementById("EndTime").innerHTML = EndTime;



// if ((contents ==1 && no.offsetTop==0 && no.offsetLeft==0)
// 		&&(contents ==2 && no.offsetTop==0 && no.offsetLeft==100)
// 		&&(contents ==3 && no.offsetTop==0 && no.offsetLeft==200)
// 		&&(contents ==4 && no.offsetTop==100 && no.offsetLeft==0)
// 		&&(contents ==5 && no.offsetTop==100 && no.offsetLeft==100)
// 		&&(contents ==6 && no.offsetTop==100 && no.offsetLeft==200)
// 		&&(contents ==7 && no.offsetTop==200 && no.offsetLeft==0)
// 		&&(contents ==8 && no.offsetTop==200 && no.offsetLeft==100))
// 		{
// 		var date = new Date;
// 		var seconds = date.getSeconds();
// 		var minutes = date.getMinutes();
// 		var hour = date.getHours();
// 		var EndTime = hour+":" +minutes+":"+ seconds;
// 		document.getElementById("EndTime").innerHTML = EndTime;
// 		alert("done")}






// Id can not go through to 2nd function

// function AllDone_short(id) {
// 	var no=document.getElementById(id);
// 	console.log(no)
// 	var contents = document.getElementById(id).textContent;
// 	var no_pos_left = no.offsetLeft;
// 	var no_pos_top = no.offsetTop;
// 	var contents = no.textContent;

// 	console.log("123")
// 	console.log(contents)
// 	console.log(no_pos_left)
// 	console.log(no_pos_top)






// Move 1-8
// Moves : added cout+=1 to each 1~8
	
function myMove(id){
			var emt=document.getElementById('myAnimation_br');
			var no=document.getElementById(id);
			var emt_pos_left = emt.offsetLeft;
			var emt_pos_top = emt.offsetTop;
			var no_pos_left = no.offsetLeft;
			var no_pos_top = no.offsetTop;
			var contents = no.textContent;


			console.log(no)
			console.log(no.offsetLeft)
			console.log("emt.offsetLeft : "+emt_pos_left)
			console.log("emt.offsetTop : "+emt_pos_top)
			console.log("no.offsetLeft : "+no_pos_left)
			console.log("no.offsetTop : "+no_pos_top)
			console.log("content :" + contents)




			if(no_pos_left - emt_pos_left==100 && emt_pos_top == no_pos_top)
				{
					var id = setInterval(EmtToLeft,1);
					function EmtToLeft(){
						if(emt_pos_left - no_pos_left ==100){
							clearInterval(id);		
							count +=1;
							document.getElementById("Moves").innerHTML = count;		
						} else{
							no_pos_left --;
							emt_pos_left ++;
							no.style.left = no_pos_left+'px';
							emt.style.left = emt_pos_left+'px';
		 
		 				if ((contents ==1 && no.offsetTop==0 && no.offsetLeft==0)
							&&(contents ==2 && no.offsetTop==0 && no.offsetLeft==100)
							&&(contents ==3 && no.offsetTop==0 && no.offsetLeft==200)
							&&(contents ==4 && no.offsetTop==100 && no.offsetLeft==0)
							&&(contents ==5 && no.offsetTop==100 && no.offsetLeft==100)
							&&(contents ==6 && no.offsetTop==100 && no.offsetLeft==200)
							&&(contents ==7 && no.offsetTop==200 && no.offsetLeft==0)
							&&(contents ==8 && no.offsetTop==200 && no.offsetLeft==100))
							{
							var date = new Date;
							var seconds = date.getSeconds();
							var minutes = date.getMinutes();
							var hour = date.getHours();
							var EndTime = hour+":" +minutes+":"+ seconds;
							document.getElementById("EndTime").innerHTML = EndTime;
							alert("done")}



						}}}

			if(emt_pos_left - no_pos_left == 100 && emt_pos_top == no_pos_top)
				{
					
					var id = setInterval(EmtToRight,1);
					function EmtToRight(){

						if(no_pos_left - emt_pos_left==100){
							clearInterval(id);	
							count +=1;
							document.getElementById("Moves").innerHTML = count;			
						} else{
							no_pos_left ++;
							emt_pos_left --;
							no.style.left = no_pos_left+'px';
							emt.style.left = emt_pos_left+'px';
							
								if ((contents ==1 && no.offsetTop==0 && no.offsetLeft==0)
								&&(contents ==2 && no.offsetTop==0 && no.offsetLeft==100)
								&&(contents ==3 && no.offsetTop==0 && no.offsetLeft==200)
								&&(contents ==4 && no.offsetTop==100 && no.offsetLeft==0)
								&&(contents ==5 && no.offsetTop==100 && no.offsetLeft==100)
								&&(contents ==6 && no.offsetTop==100 && no.offsetLeft==200)
								&&(contents ==7 && no.offsetTop==200 && no.offsetLeft==0)
								&&(contents ==8 && no.offsetTop==200 && no.offsetLeft==100))
								{
								var date = new Date;
								var seconds = date.getSeconds();
								var minutes = date.getMinutes();
								var hour = date.getHours();
								var EndTime = hour+":" +minutes+":"+ seconds;
								document.getElementById("EndTime").innerHTML = EndTime;
								alert("done")}
						}}}


			if(emt_pos_top - no_pos_top==100 && emt_pos_left == no_pos_left)
				{
					var id = setInterval(EmtTobottom,1);
					function EmtTobottom(){
						if(no_pos_top - emt_pos_top ==100){
							clearInterval(id);
							count +=1;
							document.getElementById("Moves").innerHTML = count;	
				
				}	
						 else{
							no_pos_top ++;
							emt_pos_top --;
							no.style.top = no_pos_top+'px';
							emt.style.top = emt_pos_top+'px';


							if ((contents ==1 && no.offsetTop==0 && no.offsetLeft==0)
							&&(contents ==2 && no.offsetTop==0 && no.offsetLeft==100)
							&&(contents ==3 && no.offsetTop==0 && no.offsetLeft==200)
							&&(contents ==4 && no.offsetTop==100 && no.offsetLeft==0)
							&&(contents ==5 && no.offsetTop==100 && no.offsetLeft==100)
							&&(contents ==6 && no.offsetTop==100 && no.offsetLeft==200)
							&&(contents ==7 && no.offsetTop==200 && no.offsetLeft==0)
							&&(contents ==8 && no.offsetTop==200 && no.offsetLeft==100))
							{
							var date = new Date;
							var seconds = date.getSeconds();
							var minutes = date.getMinutes();
							var hour = date.getHours();
							var EndTime = hour+":" +minutes+":"+ seconds;
							document.getElementById("EndTime").innerHTML = EndTime;
							alert("done")}
						}}}


			if(no_pos_top - emt_pos_top==100 && emt_pos_left == no_pos_left)
				{
					var id = setInterval(EmtToTop,1);
					function EmtToTop(){
						if(emt_pos_top - no_pos_top ==100){
							clearInterval(id);
							count +=1;
							document.getElementById("Moves").innerHTML = count;
				}				
						else{
							emt_pos_top ++;
							no_pos_top --;
							no.style.top = no_pos_top+'px';
							emt.style.top = emt_pos_top+'px';
							
							if ((contents ==1 && no.offsetTop==0 && no.offsetLeft==0)
							&&(contents ==2 && no.offsetTop==0 && no.offsetLeft==100)
							&&(contents ==3 && no.offsetTop==0 && no.offsetLeft==200)
							&&(contents ==4 && no.offsetTop==100 && no.offsetLeft==0)
							&&(contents ==5 && no.offsetTop==100 && no.offsetLeft==100)
							&&(contents ==6 && no.offsetTop==100 && no.offsetLeft==200)
							&&(contents ==7 && no.offsetTop==200 && no.offsetLeft==0)
							&&(contents ==8 && no.offsetTop==200 && no.offsetLeft==100))
							{
							var date = new Date;
							var seconds = date.getSeconds();
							var minutes = date.getMinutes();
							var hour = date.getHours();
							var EndTime = hour+":" +minutes+":"+ seconds;
							document.getElementById("EndTime").innerHTML = EndTime;
							alert("done")}

						}}}
		

			}

// click - move - 1~8

$( "#myAnimation_tl" ).click(function() {
  myMove("myAnimation_tl")
});

$( "#myAnimation_tm" ).click(function() {
  myMove("myAnimation_tm")
});

$( "#myAnimation_tr" ).click(function() {
  myMove("myAnimation_tr")
});

$( "#myAnimation_ml" ).click(function() {
  myMove("myAnimation_ml")
});

$( "#myAnimation_mm" ).click(function() {
  myMove("myAnimation_mm")
});

$( "#myAnimation_mr" ).click(function() {
  myMove("myAnimation_mr")
});

$( "#myAnimation_bl" ).click(function() {
  myMove("myAnimation_bl")
});

$( "#myAnimation_bm" ).click(function() {
  myMove("myAnimation_bm")
});

