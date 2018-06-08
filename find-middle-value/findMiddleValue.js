module.exports = function findMiddleValue(numArray) {
  // write your code in here
var lowest = 0;
var highest = 0;
for (var i = 0; i < numArray.length -1; i++) {
    if ( numArray[i] < numArray[i + 1] && numArray[i + 2]) {
      lowest += numArray[i];
      console.log(lowest);
    } else {
      highest = numArray[i];
      console.log(highest);
    }
}
for (var j = 0; j < numArray.length; j++) {
    if (numArray[i] !== lowest && numArray[i] !== highest) {
      console.log(i);
      return i;
    }
}

  //find lowest var lowest
  //find highest var highest
  //if numArray !== lowest || highest return i && numArray[i]
}