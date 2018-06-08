module.exports = function acceptableSequence(str) {
  // write your code here
  var letter = str.match(/[a-z|A-Z]/i);
  console.log(letter);
   var i = str.indexOf(letter);
   console.log(str[i]);
   if (str[i - 1] && str[i + 1] === '+') {
      return true;
    } else {
      return false;
    }
    console.log(i);
  }


