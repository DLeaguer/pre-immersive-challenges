module.exports = function acceptableSequence(str) {
  // write your code here
  for (var i = 0; i < str.length; i++) {
    console.log(str[i]);
    if (str[i].match(/[a-z]/gi)) {
      // console.log(str[i]);
      if ( str[i-1] !== '+' || str[i+1] !== '+') {
        // console.log(str[i]);
        return false;
      }
    }
  }
  return true;
}


