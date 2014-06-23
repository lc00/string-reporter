var userInput = prompt("Enter anything");
document.write(

	 "You entered: " + userInput + '<br>' +
	 "There are " + userInput.length + " in the word" + '<br>' +
	 'The third character is ' + "\'" + userInput[2] + "\'"+ '<br>' +
	 'Lowercase: ' + userInput.toLowerCase() + '<br>' +
	'Uppercase: ' + userInput.toUpperCase() + '<br>' +
	'Example: What is going on in ' + userInput + '<br>' +
	'Subword: ' + userInput.substring(1,[4])

	);

console.log(
	"you entered: " + userInput + '\n' +
	"yes"

	);