module.exports = function insertDashes(num) {
  // write your code in here
  console.log(num);
  var str = '' + num;
  var newStr = '';
  console.log(str);
  for (var i = 0; i < str.length; i++) {
    if (str[i] % 2 === 1) {
      newStr += str[i];
      console.log('  odd  ', str[i]);
      console.log('  odd newStr  ', newStr);
    }
    if (str[i] % 2 === 0 && str[i+1] % 2 === 0) {
      newStr += str[i] + '-';
      console.log('  even & even  ', str[i] + '-' + str[i + 1]);
      console.log('  even & even newStr  ', newStr);
    }
    else if (str[i] % 2 === 0) {
      newStr += str[i];
      console.log('  even  ', str[i]);
      console.log('  even newStr  ', newStr);
    }
  }
  return newStr;
}