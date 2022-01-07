function maxMultiple(divisor, bound){
  return bound-bound%divisor
}


const maxMultiple = (divisor,bound) => bound - bound % divisor ;


function maxMultiple(divisor, bound) {
  return Math.floor(bound / divisor) * divisor;
}

function maxMultiple(divisor, bound) {
  while (bound % divisor) {
    bound--;
  }
  
  return bound;
}
