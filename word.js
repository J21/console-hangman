
//import Letter above with requiring the letter.js file
var Letter = require("./letter.js");

//
var Word = function(wordFunction){
	//set a property called word and set it equal to what you 
	this.word = wordFunction;

	//set a property to an empty array. We will eventually push letter objects in here
	this.lettersArray = [];

	//set a property called found to false
	this.found = false;

	//make a property called getLetters, set it to a function and inside the function loop over the word property and push letter objects into the word property
	this.getLetters = function(){
		
		for(i=0;i<this.word.length;i++){

			this.lettersArray.push(new Letter.Letter(this.word[i]));
		}
		
	};

	//returns ture or false whether we found the current word or not
	this.findWord = function(param) {
		//set the found property to true or false based on whether all the letters have been found or not
		if(param === this.lettersArray.length){
			this.found = true;
		} 
		return this.found;
	};

	this.checkLetter = function(guess) {
		//set a variable totalCharactersMatched to 0
		var totalCharactersMatched = 0;

		for(i=0;i<this.lettersArray.length;i++){
			if(guess === this.lettersArray[i].Character){
				this.lettersArray[i].appear = true;
				console.log("Match found!");
				totalCharactersMatched++;
			};

		}
		//loop over the lettersArray and if the letter object's Character property equals the guess then set the appear to true. Also increment totalCharactersMatched.
		
		return totalCharactersMatched;
	};

	this.wordRender = function() {
		//make a variable named str and set it to empty quotes
		var str = "";
		//loop over this.lets and call the letterRender property of the letter object that you're looping over, and add it to str
		for(i=0;i<this.lettersArray.length;i++){
			
			str += this.lettersArray[i].letterDisplay();;
		}

		return str;
		//return str
	};
}

//export the Word constructor in the end

exports.Word = Word;