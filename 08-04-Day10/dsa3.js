const quadruplet = (num, n, target, count) => {
    if(target == 0){
        if(count == 4){
        return true;
    }
    }
    if (count > 4 || n == 0){
        return false;
    }

    return quadruplet(num, n-1, target - num[n-1], count+1) || quadruplet(num, n-1, target, count);
}

let num = [2, 7, 4, 0, 9, 5, 1, 3];
n = num.length;
target = 20;
count = 0;

if (quadruplet(num,n,target, 0)){
    console.log("Quadraple exists");
}

else{
    console.log("Does not exist");
}