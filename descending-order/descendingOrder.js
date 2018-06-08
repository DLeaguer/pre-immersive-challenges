module.exports = function descendingOrder(number) {
  // write code in here

  if (typeof number === 'number') {
    console.log(number);
    var numbers = number + '';
    console.log(numbers);
    var array = numbers.split('');
    console.log(array);
    array.sort();
    console.log(array);
    array.reverse();
    console.log(array);
    numbers = array.join('');
    number = Number(numbers);
    console.log(numbers);
    console.log(number);
    return number;
  } else {
    console.log('not a number!');
    return 'not a number!';
  }
}