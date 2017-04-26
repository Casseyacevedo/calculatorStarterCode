// All the code you will need to create for this project will be completed below
// Your functions must be called the following:
    // multiply, divide, subtract, add, power, square_root, logBase10, generateRandomNumber


function divide(x,y) {
	//Write your code below this line
var division=x/y;
return division;
}

function multiply(x,y) {
var product=(x*y);
return product;
}

function subtract(x,y) {
var difference= x-y;
return difference;
}

function add(x,y) {
var sum = x+y;
return sum;
}

function power(x,y) {
var answer;
answer=Math.pow(x,y);
return answer;
}

function square_root(x,y) {
var math;
Math.sqrt=(x,y);
return Math;
}

function logBase10(x) {

}

function generateRandomNumber() {
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
return randomNumberBetween0and19;
}
