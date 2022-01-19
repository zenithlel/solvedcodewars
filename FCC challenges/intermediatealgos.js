// Challenge 1 : sum of numbers between 

//-*********************************************************************************************************************************************************************************

function sumAll(arr){
  let max= Math.max(arr);
  let max = Math.min(arr);
  let sum = 0
  for(let i =0; i <= max; i++){
    sum+=i
  }
  return sum;
}

function sumAll(arr) {
  let result =0
  const reducer = (a,b) => a+b
  result = arr.reduce(reducer)
  for(let i=Math.min(...arr) +1; i < Math.max(...arr); i++){
    result+=i;
  }
  return result;
}

sumAll([1, 4]);

function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sumBetween = 0;
  for (let i = min; i <= max; i++) {
    sumBetween += i;
  }
  return sumBetween;
}

sumAll([1, 4]);


const sumAll = arr => {
  // Buckle up everything to one!
  const startNum = arr[0];
  const endNum = arr[1];

  // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
  // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
  const numCount = Math.abs(startNum - endNum) + 1;

  // Using Arithmetic Progression summing formula
  const sum = ((startNum + endNum) * numCount) / 2;
  return sum;
};


function sumAll(arr) {
  let sumBetween = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sumBetween += i;
  }
  return sumBetween;
}

sumAll([1, 4]);


function sumAll(arr) {
  const [first, last] = [...arr].sort((a, b) => a - b);
  return first !== last
    ? first + sumAll([first + 1, last])
    : first;
}

sumAll([1, 4]);
