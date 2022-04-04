function findPair(num, target){
    size = num.length;
    pair = [];

    for(i=0; i<(size-1); i++){
        for (j=(i+1); j<size; j++){
            if (num[i] + num[j] == target){
                pair.push(num[i]);
                pair.push(num[j]);
                console.log("Pair found : ", pair);
                pair = []
            }
            }
        }
    // return  console.log("Pair found : ", pair);
}

console.log(findPair([8,7,2,5,3,1],10))

