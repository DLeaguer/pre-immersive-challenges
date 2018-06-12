module.exports = function findMiddleValue(numArray) {
  // write your code in here
  console.log(numArray);
  var largest = 0;
  var smallest = 0;
  for (var i = 0; i < numArray.length; i++) {
    console.log('largest ' + largest);
    if (largest > numArray[i]) {
      largest = largest;
    }
    else {
      largest = numArray[i];
    }
  }
  for (var j = 0; j < numArray.length; j++) {
    smallest = numArray[j];
  }
  for (var l = 0; l < numArray.length; l++) {
    console.log('smallest ' + smallest);
    if (smallest < numArray[l]) {
      smallest = smallest;
    }
    else {
      smallest = numArray[l];
    }
  }
  for (var k = 0; k < numArray.length; k++) {
    if (numArray[k] !== largest && numArray[k] !== smallest) {
      console.log('numArray[k] ' + numArray[k]);
      console.log('k ' + k);
      return k;
    }
  }

}