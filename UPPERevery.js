
let str = 'js string exercises';

var word = str.split(" ")

for(var i=0;i<word.length;i++){
  word[i]=word[i][0].toUpperCase()+word[i].slice(1)
}

var h = word.join(" ")

console.log(h)