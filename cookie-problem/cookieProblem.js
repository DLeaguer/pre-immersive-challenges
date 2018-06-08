module.exports = function cookieProblem(array) {
  // write your code in here

  var cookies = 0;
  function total(arr) {
    
    var largestNum = 0;
    
    for (var i = 0; i < arr.length; i++) {
      if (largestNum <= arr[i]) {
        largestNum = arr[i];
      }else{
        largestNum = largestNum;
      }
    }
    console.log(largestNum);
    
   
    for (var j = 0; j < arr.length; j++) {
      cookies += largestNum - arr[j]; 

    }
    // return cookies;
  }
  total(array);
  console.log(cookies);
  return cookies;
  //loop through array
  //var arr = array[i];
  //if arr[i] < arr[i+1] replace arr
  //loop through array again
  //cookies += arr - arr[i]
}