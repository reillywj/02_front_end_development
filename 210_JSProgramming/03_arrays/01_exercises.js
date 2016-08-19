var arr = ["first",2,3,4,"last"];
var names = ['Steve', 'Martha', 'Pat'];

function lastInArray(arr) {
  return arr[arr.length - 1];
}

function rollCall(arr) {
  for(var i = 0, len = arr.length; i < len; i++) {
    console.log(arr[i]);
  }
}

function listInReverse(arr) {
  var new_arr = [];
  for(var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
    new_arr.push(arr[i]);
  }
  return new_arr;
}

function findValue(value, arr) {
  for (var i = 0, len = arr.length; i < len; i++) {
    if(arr[i] === value) { return i;}
  }
  return -1;
}

function arrToStr(arr) {
  var str = '[';
  for (var i = 0, len = arr.length; i < len; i++) {
    if (i !== 0) { str += ', ';}
    str += arr[i];
  }
  str += ']'
  return str;
}

console.log(lastInArray(arr));

rollCall(names);

var inReverse = listInReverse(arr);

console.log(findValue("Martha", names));
console.log(findValue("Will", names));

console.log(arrToStr(names));
console.log(arrToStr(arr));