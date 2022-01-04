function parse(data) {
  let res = [];

  data.split('').reduce((cur, s) => {
    if (s === 'i') cur++;
    if (s === 'd') cur--;
    if (s === 's') cur = Math.pow(cur, 2);
    if (s === 'o') res.push(cur);
    
    return cur;
  }, 0);
  
  return res;
}


const parse = data => {
  const Commands = {
      INCREMENT:  'i',
      DECREMENT:  'd',
      SQUARE:     's',
      OUTPUT:     'o'
  }

  var outputs = [],
      value = 0;
  
  data.split('').forEach(command => {
    switch(command) {
      case Commands.INCREMENT:  value++;                   break;
      case Commands.DECREMENT:  value--;                   break;
      case Commands.SQUARE:     value = Math.pow(value, 2);break;
      case Commands.OUTPUT:     outputs.push(value);       break;
    }
  });
  
  return outputs;
}


var map = {
  'i' : function(x){return x + 1;},
  'd' : function(x){return x - 1;},
  's' : function(x){return x * x;}
}

function parse( data )
{
  var array = [], val = 0;
  data.split('').forEach(function(x){
    if(x === 'o'){
      array.push(val); 
    } else {
      val = map[x](val);
    }
  });
  return array;
}



function parse( data ) {  
  var v = 0, ret = []
  for (var c of data) {
    switch (c) {
      case 'i' : v++;         break;
      case 'd' : v--;         break;
      case 's' : v=v*v;       break;
      case 'o' : ret.push(v); break;
    }
  }
  return ret;
}


const parse = data => data
  .split('')
  .reduce(({ val, output }, op) => {
      if (op === 'i') val += 1
      if (op === 'd') val -= 1
      if (op === 's') val *= val
      if (op === 'o') output.push(val)

      return { val, output }
    }, { val: 0, output: [] }).output
