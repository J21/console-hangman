//THIS NEEDS TO BE A CONSTRUCTOR
var Letter = function(Inputletter) {
	//make a charac property and set it to what you think makes second_instructor_demonstration
	//This is the placeholder for the user-typed letter, temporarily blank
	this.Character = Inputletter;

	//make an appear property and set it to what makes sense
	//This.appear is false, as we're not showing a character to the screen unless guessed correctly.
	this.appear = false;

	//make a letterToDisplay property and set it to a function that does what you think makes sense
	this.letterDisplay = function(){

		//define what charac needs to be
		if(this.appear === true){
			return this.Character;
		}else{
			return "-";
		}

		//if the parameter 

		//show charac instead of appear

	};
};
//export the Letter constructor here

exports.Letter = Letter;