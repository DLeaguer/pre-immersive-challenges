module.exports = function findTheStrayValue(array) {
  // write your code in here
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1]) {
      console.log(array[i + 1]);
      return array[i + 1];
    }
  }
}