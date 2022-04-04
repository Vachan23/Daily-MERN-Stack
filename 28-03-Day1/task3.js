function test50(x, y){
  return ((x==50 || y==50) || (x+y==50))
}



console.log(test50(50, 50))
console.log(test50(20, 50))
console.log(test50(20, 20))
console.log(test50(20, 30))
console.log(test50(10, 20))
console.log(test50(80, 30))