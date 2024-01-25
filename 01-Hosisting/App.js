var z = 1;
function b(){
  z = 10;
  return;
  function a(){
    console.log(z);
  }
}
b();
console.log(z);


//  answer is 1
//because variables declared inside the function will be deleted once function executed sucessfully in call stack

// question - 02
console.log(hoist); //undefined
var hoist = "value";

// Problem 3:
console.log(a); // What will this log? undefined
var a = 5;
console.log(a); // What will this log? 5 
// because in memeory creation phase variables are alloctaed in memeory with special keyword undefines

// Problem 4:
function example() {
  console.log(b); // What will this log? undefined
  var b = 10;
  console.log(b); // What will this log? 10
}
example();

// Problem - 5
console.log(c); // What will this log? undefined
if (true) {
  var c = 20;
}
console.log(c); // What will this log? undefined 

// problem - 6
function hoistingExample() {
	console.log(d); // What will this log? undefined
	if (true) {
		var d = 30;
	}
	console.log(d); // What will this log? 30
}

hoistingExample();

// problem - 06
console.log(e); // What will this log? whole function is logged
function e() {
  console.log("Hello from e!");
}
console.log(e); // What will this log? whole function is logged

// problem 7
console.log(f); // What will this log? error
var f = function() {
  console.log("Hello from f!");
}
console.log(f); // What will this log? 
//bcause anonymous function s are not hoisted

// problem - 8
console.log(g); // What will this log? error
if (true) {
  var g = function() {
    console.log("Hello from g!");
  }
}
console.log(g); // What will this log? 


