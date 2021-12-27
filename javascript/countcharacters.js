function count (string) {  
  // The function code should be here
  const letters = "abcdefghijkhlmnopqrstuvwxyz";
  lettercount= 0;
  let count = {}
  for(let i =0; i< letters.length; i++){
    for(let x = 0; x < string.length; x++){
      if(string[x] == letters[i]){
        lettercount += 1;
        count[letters[i]] = lettercount;        
      }
      
    }
    lettercount = 0;
  }
   return count;
}
