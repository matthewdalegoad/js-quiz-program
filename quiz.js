// variables
var correct = 0;

// prompt
var answer1 = prompt("You are taking a five question quiz. Please anser clearly. What year is Matt going to graduate?");
var answer2 = prompt("What is 1+1?");
var answer3 = prompt("What is 5+5");
var answer4 = prompt("What is 4/2?");
var answer5 = prompt("Who is Keyser Söze?");

// if statement
if ( answer1=== '2016' ) {
 correct += 1;
}
if ( answer2=== '2' ) {
 correct += 1;
}
if ( answer3=== '10' ) {
 correct += 1;
}
if ( answer4 === '2' ) {
 correct += 1;
}
if ( answer5.toUpperCase() === 'KEVIN SPACEY' ) {
 correct += 1;
}

console.log("correct: "+correct)

if (correct ==5){
	var award = "Gold Medal"
}
if (correct ==4){
	var award = "Silver Medal"
}
if (correct ==3){
	var award = "Bronze Medal"
}
if (correct ==2){
	var award = "nothing"
}
if (correct ==1){
	var award = "nothing"
}

document.write("<p>Hello World, your answer was: "+correct+". And you receive: "+award+"</p>")