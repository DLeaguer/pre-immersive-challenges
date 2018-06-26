module.exports = function reverseMessage(str) {
  // write your code in here
  var str2 = '';
  
  // change all to lower case
  str = str.toLowerCase();
  console.log('  to lower ', str);
  
  // not necessary, will use for loop to change firstLetters
//   var upper = str[str.length-1].toUpperCase();
//   console.log('  to upper  ', upper);
//   str = str.slice(0,-1);
//   console.log('  str slice  ', str);
//   str = str + upper;
//   console.log('  str + upper  ', str);
  
  // reverse string
  for (var i = str.length-1; i >= 0; i--) {
    str2 += str[i];
  }
  console.log('  str2  ', str2);
  
  // convert string to array of strings
  var strArr = str2.split(' ');
  console.log('  strArr  ', strArr);
  var arr = [];
  
  // capitalize first letter in each string
  for (var j = 0; j < strArr.length; j++) {
    console.log('  strArr[j]  ', strArr[j]);
    console.log('  strArr[j].charAt(0)  ', strArr[j].charAt(0));
    var firstLetter = strArr[j].charAt(0).toUpperCase();
    console.log('  firstLetter  ', firstLetter);
    var restOfWord = strArr[j].slice(1);
    console.log('  restOfWord  ', restOfWord);
    arr.push(firstLetter + restOfWord);
    console.log('  arr  ', arr);
  }
  
  // convert array back to string
  var strResult = arr.join(' ');
  console.log('  arr.join(" ")  ', arr.join(' '));
  console.log('  strResult  ', strResult);
  return strResult;
}