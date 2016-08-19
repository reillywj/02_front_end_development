function push(arr, value) {
  arr[arr.length] = value;
  return value;
}

function pop(arr) {
  var value = arr[arr.length - 1];
  arr.length--;
  return value;
}

function unshift(arr, value) {
  // Comment: My first take. It works but is less elegant.
  // var next;
  // for (var i = 0, len = arr.length; i <= len; i++) {
  //   next = arr[i];
  //   arr[i] = value;
  //   value = next;
  // }

  for (var i = arr.length; i > 0; i--) {
    arr[i] = arr[i-1];
  }
  arr[0] = value;

  return arr.length;
}

function shift(arr) {
  var value = arr[0];
  for (var i = 0, len = arr.length; i + 1 < len; i++) {
    arr[i] = arr[i+1];
  }
  arr.length--;
  return value;
}