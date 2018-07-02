// 1. Reverse an array

function printReverse(arr) {
  for(var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}



// 2. Check if all items in the array are uniform

// method A: for loop
function isUniform(arr) {
  var x = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== x) {
      return false;
    }
  }
  return true;
}

// method B: forEach 
function isUniform2(arr) {
  var x = arr[0];
  var result = true;
  arr.forEach(function(item){
    if (item !== x) {
      result = false;
    }
  });
  return result;
}



// 3. Sum up an array
function sumArray(arr) {
  var sum = 0;
  arr.forEach(function(item){
    sum += item;
  });
  return sum;
}



// 4. Find the max number in an array
function max(arr) {
  var maxNum = arr[0];
  arr.forEach(function(item){
    if (item > maxNum) {
      maxNum = item;
    }
  });
  return maxNum;
}