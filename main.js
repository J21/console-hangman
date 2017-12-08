var prompt = require('prompt');
var Word = require('./word.js');
var Game = require('./game.js');

prompt.start();

game = {
	
	lettersFound : 0,
	guessesRemaining : 10, //per word
	currentWrd : null, //the word object
	startGame : function (wrd){
		//make sure the user has 10 guesses
		this.resetGuessesRemaining();

		//get a random word from the array
		this.currentWrd = new Word.Word(Game.Game.wordBank[Math.floor(Math.random()* Game.Game.wordBank.length)]);
		this.currentWrd.getLetters(); //populate currentWord object with letters (from Word constructor)

		this.currentWrd.wordRender();
		this.keepPromptingUser();

	}, 
	resetGuessesRemaining : function(){
		this.guessRemaining = 10;
	},
	keepPromptingUser : function(){
		var self = this;

		prompt.get(['guess'], function(err, result) {
		    
		    console.log('  The letter or space you guessed is: ' + result.guess);

		    //this checks if the letter was found and if it is then it sets that specific letter in the word to be found
		    var numberGuess = self.currentWrd.checkLetter(result.guess);

		    
		    if (numberGuess == 0){
		    	console.log('You guessed wrong!');
		    	self.guessesRemaining--;
		    }else{
		    	console.log('You guessed right!');
		    	game.lettersFound++;

		    	//check if you win only when you are right
	    		if(self.currentWrd.findWord(game.lettersFound)){
			    	console.log('You Won!!!');
			    	return; //end game
			    }
		    }
		    
		    console.log('Guesses remaining: ', self.guessesRemaining);
		    console.log(self.currentWrd.wordRender());

		    if ((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
		    	self.keepPromptingUser();
		    }
		    else if(self.guessesRemaining == 0){
		    	console.log('Sorry, but you lost! The word was: ', self.currentWrd.word);
		    }else{
		    	console.log(self.currentWrd.wordRender());
		    }
		});
	}


};

game.startGame();