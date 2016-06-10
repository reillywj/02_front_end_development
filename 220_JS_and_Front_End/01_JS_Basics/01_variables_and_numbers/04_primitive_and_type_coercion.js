exercise = 1;
var logz = function(value) {
  console.log("> " + value)
};

// var wrap = function(value) {
//   return function(name = "") {
//     console.log(value + name + value);
//   };
// };

var title = function(name = "") {
  var a = "++++++++++++++";
  console.log(a + name.toString() + a);
};

var next_exercise = function() {
  title("Exercise " + exercise);
  exercise++;
};

title();
title("Primitive Types and Type Coercion");

next_exercise();
var x = "13",
    y = 9;
console.log(x + y);
console.log(Number(x) + y);

next_exercise();
console.log(typeof(x * y));

next_exercise();
var npa = 212,
    nxx = 555,
    num = 1212;

console.log(npa + nxx + num);
console.log(npa.toString().concat(nxx.toString(), num.toString()));

next_exercise();
console.log(String(npa) + String(nxx) + String(num));

next_exercise();
var bool = true,
    arr = [1, 2, 3];
console.log(bool.toString());
console.log(arr.toString());