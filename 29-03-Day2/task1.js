function maxSumPath(a1, a2, len1, len2){
    let result = 0,
    sum1 = 0,
    sum2 = 0;
    let i = 0,
    j = 0;
    // path = [];

    while (i<len1 && j<len2){
        if(a1[i]<a2[j]){
            sum1 += a1[i];
            i+=1;
            // path.push(a1[i]);
        }
        else if(a1[i]>a2[j]){
            sum2+=a2[j];
            j+=1;
            // path.push(a2[j]);
        }
        else{
            result += Math.max(sum1, sum2) + a1[i];
            sum1 = 0;
            sum2 = 0;
            // path = [];
            i+=1;
            j+=1;
        }
    }
    while(i<len1){
        sum1+=a1[i];
        i+=1;
        // path.push(a1[i]);
    }
    
    while(j<len2){
        sum2+=a2[j];
        j+=1;
        // path.push(a2[j]);;
    }

    result += Math.max(sum1,sum2);
    
    // sorted_path = path.sort();
    // console.log(path);

    return result;
}

let a1 = [3, 6, 7, 8, 10,12, 15, 18, 100];
let a2 = [1, 2, 3, 5, 7, 9, 10, 11, 15, 16, 18, 25, 50];
let len1 = a1.length;
let len2 = a2.length;

console.log(maxSumPath(a1, a2, len1, len2));