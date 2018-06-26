module.exports = function needleInHaystack(haystack) {
  // write code in here
  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] === 'needle') {
      console.log('  haystack[i]  ', haystack[i]);
      console.log('  i  ', i);
      return i;
    }
  }
  console.log('false');
  return false;
}