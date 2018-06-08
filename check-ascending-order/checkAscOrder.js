module.exports = function checkAscOrder(numArray) {
  // write your code in here

  for (var i = 0; i < numArray.length; i++) {
    var num = numArray[i];
    if (num < numArray[i + 1]) {
      num += numArray[i];
      return true;
    } else {
      return false;
    }
  } 
  //loop through array
  //if next number is > then replace number
  //if new number is greater then return true  
}