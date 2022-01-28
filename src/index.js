module.exports = function toReadable (number) {
  let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  let arr2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let arr3 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

  let firstArr = Array.from(String(number), Number);

  if (firstArr.length === 1){
    return arr[firstArr[0]];
  } else if(firstArr.length === 2) {
    if(number < 20){
      return arr2[firstArr[1]];
    } else if(firstArr[1]===0){
      return arr3[firstArr[0]-2];
    } else {
      return `${arr3[firstArr[0]-2]} ${arr[firstArr[1]]}`;
    }
  } else{
    if(firstArr[1]===0 && firstArr[2] === 0){
        return `${arr[firstArr[0]]} hundred`;
    } else if(firstArr[2]===0 && firstArr[1] !== 1){
      return `${arr[firstArr[0]]} hundred ${arr3[firstArr[1]-2]}`;
    } else if(firstArr[1]===0){
        return `${arr[firstArr[0]]} hundred ${arr[firstArr[2]]}`;
    }else if(firstArr[1]===1){
        return `${arr[firstArr[0]]} hundred ${arr2[firstArr[2]]}`;
    } else {
      return `${arr[firstArr[0]]} hundred ${arr3[firstArr[1]-2]} ${arr[firstArr[2]]}`;
    }
  }
}
