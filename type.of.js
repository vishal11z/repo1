function isString(value) {
     return typeof value === 'string' || value instanceof String;
  
  }  
console.log(isString('w3resource'));

console.log(isString([1,343,2343,34]));
