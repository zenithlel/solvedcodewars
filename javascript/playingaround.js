
const myArray = [];

// Only change code below this linel
let i = 5;
while (i > -1) {
  myArray.push(i)
  i--;
}


console.log(myArray)


function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for(let i = 0; i< arr.length; i++){
    product += (arr[i][0] * arr[i][1])
  }

  // Only change code above this line
  return product;
}

let result = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

console.log(result)

let klash = 10
ourned = []
do{
  ourned.push(klash)
}while (klash < 5) {  
  klash++;
}

console.log(ourned)

console.log(klash)

console.log(Math.floor(Math.random() *20))



function rangeOfNumbers(startNum, endNum) {
  if(endNum - startNum === 0){
    return [startNum]
  }
  var arr = rangeOfNumbers(startNum, endNum - 1)
  
  arr.push(endNum)
  
  return arr
};

console.log(rangeOfNumbers(1, 5))
