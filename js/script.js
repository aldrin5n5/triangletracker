function check_triangletracker() {;
var a = parseFloat(prompt("Enter the Length Dimenision "));
var b = parseFloat(prompt("Enter the height Dimenision"));
var c = parseFloat(prompt("Enter the hpotenus Dimenision"));
 if (a===b && b===c){
    alert("This is an equilateral triangle");
 }
 else if (a===b||b===c||a===c) {
   alert("this is an isosceles triangle");
 }
 else if ((a+b)<=c ||(b+c)<=a || (a+c)<=b) {
   alert("this is not a triangle");
 }
 else {
   alert("scalene");
 }
 }
