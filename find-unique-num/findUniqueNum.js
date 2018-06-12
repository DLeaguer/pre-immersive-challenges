module.exports = function findUniqueNum(strOfNums) {
  // write your code in here
  var arr = strOfNums.split(' ');
  console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] % 2 === 0 && arr[i+1] % 2 === 1) { 
      console.log(arr[i+1]);
      console.log(i+1);
      return i+1;
    }
    else if (arr[i] % 2 === 1 && arr[i+1] % 2 === 0) {
      console.log(arr[i+1]);
      console.log(i+1);
      return i+1;
    }
  }
}