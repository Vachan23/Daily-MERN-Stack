let arr = [1,3,5,7];
arr.push(8);
console.log("after adding ",arr);

arr.pop();
console.log("after removing ", arr);

arr.unshift(0);
console.log("adding element in the front ", arr);

arr.shift();
console.log("removing element in the front ", arr);

s = arr.join("");
console.log("Concatenation ", s);


// for(i=0;i<s.length;i++){
//     n[i] = s[i].charAt([i]);
// }

n = s.split("");
console.log("Seperate the characters into array ", n);
