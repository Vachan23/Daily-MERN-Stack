const findMaxProfit = (price) => {
    let profit = 0;
    let j = 0;
    for(i=1; i=price.length; i++){
        if(price[i-1] > price[i]){
            j=i;
        }
        if (price[i-1] <= price[i]) {
            if (i + 1 == len(price) || price[i] > price[i + 1]){
                profit += (price[i] - price[j]);
        }
    }
    return profit;
}
}

let p = [1,5,2,3,7,6,4,5];
console.log(findMaxProfit(p))
