const max = (a,b) => {
    if(a==b)
         return a;
    else{
        if(a>b)
            return a;
        else
            return b;
       }
}


const platform = ( arrival, departure, n) =>{
    let platform1 = 1;
    let res = 1; 
    for (let i = 0; i < n; i++) {
        platform1 = 1;
 
        for (let j = i + 1; j < n; j++) {
            if ((arrival[i] >= arrival[j] && arrival[i] <= departure[j]) || (arrival[j] >= arrival[i] && arrival[j] <= departure[i])){
                platform1++;
            }
        }
         result = max(res, platform1);
    } 
    return result;
}

let arrival = [2.00, 2.10, 3.00, 3.20, 3.50, 5.00];
let departure = [2.30, 3.40, 3.20, 4.30, 4.00, 5.20];
numberOfPlatforms = 2;
console.log(platform(arrival, departure, numberOfPlatforms));