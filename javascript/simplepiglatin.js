function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}


function pigIt(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + 'ay';
  });
}

function pigIt(str) {
  var arrayWord = str.split(' ');
  return arrayWord.map(function(word) {
    var firstLetter = word.charAt(0);
    return word.slice(1) + firstLetter + 'ay';
  }).join(' ');
}


function pigIt(str){
    let newStr="";
    const array=str.split(" ");
    for (let i of array){
        let firstLetter=""; //use to store the first letter in the word
        for(let j in i){
            if(j==='0'){
                firstLetter+=i[j]; //store first letter
            }
            else{
                newStr+=i[j];
            }
        }
        newStr+=firstLetter; //put it into end of the word
        newStr+=" "; //space
    }
    newArray=newStr.split(" ");
    newArray.pop();//delete the empty space
    let result="" //store the result
    for(let index of newArray){
        if (index.length!=1){
            result+=index;
            result+="ay";
            result+=" ";        
        }
        else if (index.length==1){
                if(index=="?" ||index=="!" ||index=="."){ //use to check if the last length is not equal symbol
                result+=index;
                }
                else{
                    result+=index;
                    result+="ay";
                    result+=" ";               
            }
            
        }
    }
    
    if(result[result.length-1] ===" "){ //delete last space
        result=result.slice(0,result.length-1);
    }
    return(result);
