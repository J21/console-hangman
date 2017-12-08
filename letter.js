//This constructor uses the parameter, which is a guessed letter, and compares it to word currently being used as answer
var Letter = function(Inputletter) {
	//placeholder for the parameter
	this.Character = Inputletter;

	//this variable determine whether the character will show up in any blanks, false by default
	this.appear = false;

	//make this a function that determines whether the letter appears in the chosen word or not
	this.letterDisplay = function(){

		//if true, this character will appear, otherwise it will just be a -
		if(this.appear === true){
			return this.Character;
		}else{
			return "-";
		}
	};
};
//export Letter object as "Letter"
exports.Letter = Letter;