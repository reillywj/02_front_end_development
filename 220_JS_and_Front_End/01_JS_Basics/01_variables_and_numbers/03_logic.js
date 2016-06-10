var logz = function(value) {
  console.log("> " + value)
};

var title = function(name = "") {
  var a = "=============";
  console.log(a + name + a);
};

title();
title("Logic Exercises");

title("Exercise 1");
var comparison = function(a,b) {
  if(a == b) {
    logz(a + "==" + b +"--->" + (a==b));
  } else {
    logz(a + "!=" + b +"--->" + (a!=b));
  };
}
var apples = 3,
    bananas = 5;
comparison(apples, bananas);
comparison(apples, "3");

var strict_compare = function(a, b) {
  if(a === b) {
    logz(a + "===" + b +"--->" + (a===b));
  } else {
    logz(a + "!==" + b +"--->" + (a!==b));
  };
  logz(typeof(a));
  logz(typeof(b));
}

strict_compare(apples, bananas);
strict_compare(apples, "3");
strict_compare(apples, 3);

title("Exercise 9");
apples = 3, bananas = undefined;
var either_or = apples || bananas, either_or2 = bananas || apples;
logz("apples || bananas: " + either_or);
logz("bananas || apples: " + either_or2);

title("Exercise 10");
var last_name = "Reilly", family_message= last_name === "Riley" ? "You're part of the family!" : "You're not part of the family.";
logz(last_name + " === \"Riley\" ? " + family_message);


