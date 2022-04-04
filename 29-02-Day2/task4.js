function findNoElements(ar1, ar2){
count = 0;

    for(let i=0; i<ar1.length; i++){
        for(let j=0; j<ar2.length; j++){
            if (ar1[i]===ar2[j]){
                count+=1;
            }
        }
    }
    return count;
}

console.log(findNoElements([1,2,3,4,5],[1,2,3,4,6]));
console.log(findNoElements([1,2,3,4,5],[6,4,3,2,1]));
console.log(findNoElements([1,2,3,4,5],[2,1,6,4,3]));