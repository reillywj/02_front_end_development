function logz(str) { console.log("> " + str); }

function statement(phrase) {
  return function(str) {
    logz(phrase + ": " + str);
  }
}

var guess   = statement("Guess");
var reason  = statement("Reason");
var step    = statement("Step");
var correct = statement("Correct answer");