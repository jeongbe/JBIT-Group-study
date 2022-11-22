// DEFINE YOUR FUNCTION BELOW:

function sumArray(arr) {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  } return sum;
}

sumArray([1,2,3]) // 6
sumArray([2,2,2,2]) // 8
sumArray([50,50,1])