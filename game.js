/*let passcode = Math.floor(Math.random() * 1000);

let tries = 0;

while(tries > 0 && guess != passcode){
	console.log("You have " + tries + " tries");
	var guess = prompt("Enter a number.");
	tries--;

	if(guess == passcode){
		console.log("You win! Got it in " + (10-tries) + "tries");
	}else if(tries == 0){
		console.log("You loose! The number was " + passcode);
	}else{
		giveClue(guess);
	}

}


function giveClue(guess){
	if(guess > passcode){
		console.log(guess + " is to high!");
	}else{
		console.log(guess + "is to low!");
	}
}*/

let passcode = Math.floor(Math.random() * 1000);

let tries = 10;
console.log("here");

let attemptsText = document.getElementById("attempts");
attemptsText.innerHTML = "Number of attempts left: " + tries;

let clueText = document.getElementById("clue");

let button = document.getElementById("guess-button");

let number = document.getElementById("guess-text");

button.addEventListener("click", guessNumber);

function guessNumber(){
	let guess = number.value;
	tries--;
	if(guess == passcode){
		//you can grab the body without a id since there is only one
		document.body.innerHTML = "<h1>You win!</h1>"
								  + "<p> Got it in " + (10-tries)+" tries.</p>";
	}else if(tries <= 0){
		document.body.innerHTML = "<h1>You lose!</h1>"
								+ "<p>The number was: " + passcode + "</p>";							
	}else{
		attemptsText.innerHTML = "Number of attempts left: " + tries;
		giveClue(guess);
	}
}

function giveClue(guess){
	if(guess > passcode){
		clueText.innerHTML += "<li>" + guess + "is too high!</li>";
	}else{
		clueText.innerHTML += "<li>" + guess + "is too low!</li>";
	}
}