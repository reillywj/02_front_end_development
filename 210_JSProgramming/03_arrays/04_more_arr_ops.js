function slice(arr, start, end) {
  var returnArr = [];
  for(; start < end; start++) {
    returnArr[returnArr.length] = arr[start];
  }
  return returnArr;
}

function splice(arr, start, count) {
  var returnArr = [];
  var currentIndex;
  if (start + count > arr.length) { count = arr.length - start; }

  for (var i = 0; i < count; i++) {
    returnArr[i] = arr[start + i];

    currentIndex = start + i + count;

    if( currentIndex < arr.length) {
      arr[start + i] = arr[currentIndex];
    }
  }
  arr.length -= count;

  return returnArr;
}

function concat(arr1, arr2) {
  var newArr = [];
  for(var i = 0, len = arr1.length; i < len; i++) {
    newArr[i] = arr1[i];
  }
  for(var j = 0, len = arr2.length; j < len; j++) {
    newArr[i + j] = arr2[j];
  }
  return newArr;
}

function join(arr, str) {
  var joinedStr = "";
  for(var i = 0, len = arr.length; i < len; i++) {
    if(i > 0) {
      joinedStr += str;
    }

    joinedStr += String(arr[i]);
    // Can also do it this way.
    // if (i + 1 < len) {
    //   joinedStr += str;
    // }
  }
  return joinedStr;
}