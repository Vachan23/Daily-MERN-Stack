function range(x, y, n){
    if (n>=x && n<=y){
        return console.log("The number is in the given range.");
    }
    else{
        return console.log("The number is not in the given range.");
    }
}

let x = 30;
let y = 80;
let n = 50;

console.log(range(x,y,n));
console.log(range(40,60,90));
console.log(range(100,150,149));
console.log(range(10,18,28));