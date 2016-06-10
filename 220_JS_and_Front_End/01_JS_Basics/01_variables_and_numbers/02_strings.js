var logz = function(value) {
  console.log("> " + value)
};

var title = function(name) {
  var a = "=============";
  console.log(a + name + a);
};


title("String Exercises")
title("Exercise 1 - 3");
var first_name = "William",
    last_name = "Reilly",
    full_name_plus = first_name + " " + last_name,
    full_name_concat = first_name.concat(" ", last_name);

logz("full_name by + operator: " + full_name_plus);
logz("full_name by .concat() method: " + full_name_concat);
var full_name = full_name_concat;
var name_array = full_name.split(" ");
logz("full_name split into an array: "); console.log(name_array);

title("Exercise 4-7");
var language = "JavaScript",
    idx = language.indexOf("S");
logz("index of \"S\" in \"JavaScript\": " + idx);

var char_code = language.charCodeAt(idx);
logz("char_code: " + char_code);

logz("String.fromCharCode(char_code) = " + String.fromCharCode(char_code));

logz("Last index of \"a\": " + language.lastIndexOf("a"));

title("Exercise 8");
var a = "a", b = "b";
logz( "a greater than b? " + (a > b));
logz( "a less than b? " + (a < b));
b = "B";
logz( " a greater than B? " + (a > b));

title("Exercise 9 - 10");
var a_index, v_index;
a_index = language.indexOf("a"); 
v_index = language.indexOf("v");
logz("a_index: " + a_index);
logz("v_index: " + v_index);

logz("language.substr(a_index, 4): " + language.substr(a_index, 4));
logz("language.substr(v_index, 4): " + language.substr(v_index, 4));

logz("language.substring(a_index, v_index): " + language.substring(a_index, v_index));

title("Exercise 11 - 12");
var fact_1 = "JavaScript is fun",
    fact_2 = "Kids like it too",
    compound_sentence = fact_1.concat(" and ", fact_2.toLowerCase(),".");
logz(compound_sentence);
var factoid_letter = function(fact) {
  logz("First letter of \"" + fact + "\": " + fact[0]);
};
factoid_letter(fact_1);
factoid_letter(fact_2);

title("Exercise 13");
var pi = 22/7;
pi = pi.toString();
logz("Last index of \"14\" in " + pi +": " + pi.lastIndexOf("14"));

title("Exercise 14");
var box_number = 356..toString();
logz("box_number with two decimals: 356..toString()=>" + box_number);
box_number = +box_number;
logz("box_number = +box_number: " + box_number + ", type: " + typeof(box_number));












