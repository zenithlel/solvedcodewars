function toCamelCase(str){
  return str.replace(/^\w|(?:[-_])\w/g, function(m, i){
    if(i !== 0){
      const match = m.replace(/[-_]/g, '')
      return match.toUpperCase();
    }
    return m;
  });
}
