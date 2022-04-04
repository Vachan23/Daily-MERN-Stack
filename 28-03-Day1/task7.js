function div(num){
  if (num%3==0 || num %7==0){
    return true;
  }
  else{
    return false;
  }
}

console.log(div(25));
console.log(div(9));
console.log(div(21));
console.log(div(49));
console.log(div(113));
