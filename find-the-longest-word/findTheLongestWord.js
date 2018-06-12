module.exports = function findTheLongestWord(sen) {
  // write your code in here
  var longest = '';
  for (var i = 0; i < sen.length; i++) {
    if (longest.length > sen[i].length) {
      lengest =longest;
    }
    else {
      longest = sen[i];
    }
  }
  console.log(longest);
  return longest;
}