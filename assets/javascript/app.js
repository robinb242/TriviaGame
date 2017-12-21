
var count=30;

var counter=setInterval(timer,1000);

function timer() {
	count=count-1;
	if (count <= 0) {

	clearInterval(counter);

	return;
}

document.getElementById("timer").innerHTML=count + "secs";
}


    
function submitAnswers() {
	var total = 5;
	var score = 0;
//Get user input

var q1 = document.forms["quizForm"]["q1"].value;
var q2 = document.forms["quizForm"]["q2"].value;
var q3 = document.forms["quizForm"]["q3"].value;
var q4 = document.forms["quizForm"]["q4"].value;
var q5 = document.forms["quizForm"]["q5"].value;

 
//Validation
for (i=1; i <= total; i++){
if(eval('q' +i) == null || eval('q' +i) == '') {
	alert('you missed question '+ i);
	return false;
	}
} 
 //Set Correct answers
var answers = ["b", "b", "c", "a", "d"];

//Check Answers
for (i=1; i <= total; i++){
	if(eval('q' + i) == answers[i-1]){
		score++;
	}
}

//Display Results
var results = document.getElementById('results');
results.innerHTML = '<h3>You scored <span>' +score+ '</span> out of <span>'+total+'</span></h3>';

alert('You scored' + score + 'out of' + total);

return false;
}
