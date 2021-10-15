function solution(str){
   let result = [];
  var i = 0;
  if(str.length % 2 != 0){
    str+='_';
  }
  while(i < str.length){
    result.push(str[i] + str[i + 1]);
    i+=2;
  }
  return result;
}
