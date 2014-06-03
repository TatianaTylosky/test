$(document).ready(function() {

console.log( "ready!" );

var nth = prompt("Until nth number in the fibonacci sequence? \n CAUTION: Browswer will crash with nth > 10^x");

var new_value = 0;
var old_value = 0;
var older_value = 1;
var sequence = [];

for (var num = 0; num < nth; num++) {
	new_value = old_value + older_value;
	older_value = old_value;
	old_value = new_value;

	sequence.push(new_value);
	// console.log(sequence);
	// console.log(sequence.reverse());

	document.getElementById("fibonacci").innerHTML += sequence + "," + sequence.reverse() + "\n <br>";
	}
});