function firstElementOf(arr) {
  return arr[0];
}

function lastElementOf(arr) {
  return arr[arr.length - 1];
}

function nthElementOf(arr, index) {
  return arr[index];
}

function firstNOf(arr, length) {
  // var result = [];
  // for (var i = 0; i < length; i++) {
  //   result.push(arr[i]);
  // }
  // return result;
  // 
  // OR
  return arr.slice(0, length);
}

function lastNOf(arr, length) {
  var index = Math.max(arr.length - length, 0);
  return arr.slice(index);
}

function endsOf(beginningArr, endingArr) {
  return [firstElementOf(beginningArr), lastElementOf(endingArr)];
}