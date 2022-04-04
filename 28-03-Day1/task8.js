function newStr(a){
  if (a.length < 3){
      return console.log("Number must be more than 3");
  }

  len = a.length;
  last = a.substring(len-3);
  return (last + a + last);
}

console.log(newStr('vachan'));
console.log(newStr('archana'));
console.log(newStr('charan'));
console.log(newStr('dheren'));