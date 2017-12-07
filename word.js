//THIS NEEDS TO BE A CONSTRUCTOR
//import Letter above with requiring the letter.js file
var Letter = require("./letter.js");

//
var Word = function(wordPassedintoWordFunction){
	//set a property called word and set it equal to what you think it should be
	this.word = wordPassedintoWordFunction;

	//set a property to an empty array. We will eventually push letter objects in here
	this.lettersObjectsArray = [];

	//set a property called found to false
	this.found = false;

	//make a property called getAllLetters, set it to a function and inside the function loop over the word property and push letter objects into the lets property.
	this.getAllLetters = function(){
		
		for(i=0;i<this.word.length;i++){

			this.lettersObjectsArray.push(new Letter.Letter(this.word[i]));
		}
		
	};

	//returns ture or false whether we found the current word or not
	this.didWeFindTheWord = function(wildParameter) {
		//set the found property to true or false based on whether all the letters have been found or not
		if(wildParameter === this.lettersObjectsArray.length){
			this.found = true;
		} 
		return this.found;
	};

	this.checkIfLetterFound = function(guessedLetter) {
		//set a variable totalCharactersMatched to 0
		var totalCharactersMatched = 0;

		for(i=0;i<this.lettersObjectsArray.length;i++){
			if(guessedLetter === this.lettersObjectsArray[i].theCharacterInLetter){
				this.lettersObjectsArray[i].appear = true;
				console.log("We have a match!");
				totalCharactersMatched++;
			};

		}
		//loop over the lettersObjectsArray property and if the letter object's theCharacterInLetter property equals the guessletter then set the appear property of the letter object to be true. Also increment totalCharactersMatched.
		
		return totalCharactersMatched;
	};

	this.wordRender = function() {
		//make a variable named str and set it to empty quotes
		var theStringOfRender = "";
		//loop over this.lets and call the letterRender property of the letter object that you're looping over, and add it to str
		for(i=0;i<this.lettersObjectsArray.length;i++){
			
			theStringOfRender += this.lettersObjectsArray[i].letterDisplay();;
		}

		return theStringOfRender;
		//return str
	};
}

//export the Word constructor here at the end

exports.Word = Word;