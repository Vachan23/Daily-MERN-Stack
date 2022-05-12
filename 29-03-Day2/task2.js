function check(ar1, ar2){
    len1 = ar1.length;
    len2 = ar2.length;
    count = 0;

    for(let i=0; i<len1; i++){
        if (ar2.includes(ar1[i])){
            count+=1;
            return true;
        }
        }
    return false;
}

let ar1 = [1,2,3,4,5];
let ar2 = [2,5,7,8,9];

console.log(check(ar1, ar2));