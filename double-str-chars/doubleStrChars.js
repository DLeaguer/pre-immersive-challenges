module.exports = function doubleStrChars(str) {
  // write your code in here
  var res = '';
  if (typeof str === 'string') {
    // console.log(str);
    for (var i = 0; i < str.length; i++) {
      res += str.charAt(i) + str.charAt(i);
    }
    console.log(res);
  } else {
    console.log('not a string!');
    return 'not a string!';
  }
  return res;
}