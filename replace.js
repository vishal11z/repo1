var texts ="apple,mango,orange,lemon,mango"

//console.log(texts.replace("mango","hahaha"))
// console.log(texts.replace(/MANGO/i,"w3school"))
// console.log(texts.replace(/mango/g,"school")





var text = "apple,mango,orange,lemon,mango";
var lastCommaIndex = text.lastIndexOf(",");
var lastWord = text.substring(lastCommaIndex + 1); // extracts the last word "mango"
var newText = text.substring(0, lastCommaIndex + 1) + lastWord.replace("mango", "kiwi");
console.log(newText); // "apple,mango,orange,lemon,kiwi"
