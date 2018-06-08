module.exports = function countByMultiples(length, x) {
  // write your code in here
  var totals = [];
  for (var i = 1; i <= length; i++) {
    // console.log(i);
    totals.push(i * x);
    // console.log(totals);
  }
  console.log(totals);
  return totals;
  //for loop create length
  //multiply i by x
}