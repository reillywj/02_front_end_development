function indexOf(arr, value) {
  var response = -1;
  for (var i = 0, len = arr.length; i < len; i++) {
    if( arr[i] === value ) {
      response = i;
      break;
    }
  }

  return response;
}

function lastIndexOf(arr, value) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if( arr[i] === value) { return i; }
  }
  return -1;
}