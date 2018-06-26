module.exports = function moveTheZeros(arrNum, isRight) {
  // write your code here
  if (isRight === true) {
    for (var i = arrNum.length-1; i >= 0; i--) {
      if (arrNum[i] === 0) {
        console.log('  arrNum[i]  ', arrNum[i]);
        var getNum = arrNum.splice(i,1);
        console.log('  getNum  ', getNum);
        var strNum = getNum.toString();
        console.log('  strNum  ', strNum);
        var numNum = parseInt(strNum);
        arrNum.push(numNum);
        console.log('  arrNum ', arrNum);
      }
    }
  }
  else {
    for (var i = arrNum.length-1; i >= 0; i--) {
      if (arrNum[i] === 0) {
        console.log('  arrNum[i]  ', arrNum[i]);
        var getNum = arrNum.splice(i,1);
        console.log('  getNum  ', getNum);
        var strNum = getNum.toString();
        console.log('  strNum  ', strNum);
        var numNum = parseInt(strNum);
        console.log('  numNum  ', numNum);
        arrNum.unshift(numNum);
        console.log('  arrNum ', arrNum);
      }      
    }
  }
  return arrNum;
}
