function check() {

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "Bugatti Chiron") {
		correct++;
}
	if (question2 == "Porsche 918") {
		correct++;
}	
	if (question3 == "yes") {
		correct++;
	}
	
	var messages = ("Great Job! You know your cars!", "That's just okay, know your cars.", "YOU NEED TO KNOW YOUR CARS!!!")
	var range;

	if (correct < 1) { 
	    range = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct > 2) {
		score = 0;
	}
	

document.getElementById("after_submit").style.visibility = "visible";


document.getElementById("number_correct").innerHTML = "You got " + correct + " of the cars correct.";
}