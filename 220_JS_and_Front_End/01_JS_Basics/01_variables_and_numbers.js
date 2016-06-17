var logz = function(value) {
  console.log("> " + value)
};

var title = function(name) {
  var a = "----------";
  console.log(a + name + a);
};


title("Variables and Numbers Exercises")

title("Exercise 1 - 3");
var numerator = 10,
    denominator = 2,
    answer = numerator / denominator;

logz(answer);

title("Exercise 4 - 6");
var incrementer = 1,
    start = incrementer,
    end,
    difference;
logz("'incrementer' before three additions: " + incrementer);
incrementer += 1;
incrementer += 2;
logz("'incrementer' after three additions: " + incrementer);
incrementer++;
incrementer++;
logz("'incrementer' after another two additions using postfix operator '++': " + incrementer);
end = incrementer;
logz("'end': " + end);
difference = end - start;
logz("'difference': " + difference);

answer = (11 + 31) * 3;
logz("(11 + 31) * 3=" + answer);
answer = 11 + 31 * 3;
logz("11 + 31 * 3=" + answer);