module.exports = function evenLadderPattern(num) {
  // write your code in here

  var evens = '';
  if (num > 1) {
    for (var i = 2; i <= num; i++){
      if ((i % 2) === 0) {
        evens += i + '' + i*nth + '\n';
      }
    }
  } else {
    console.log("");
    return "";
  }
  console.log(evens);
  //get all even numbers if modulos = 0 upto .length
  //multiply even numbers by 1
  //length of even number is its own number
  //if number <= 1  return ''

}