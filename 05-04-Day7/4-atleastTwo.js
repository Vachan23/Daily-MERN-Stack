const check = (arr) => {
    if (arr.length <= 2){
        return false;
    }
    else{
        return true;
    }
}

arr = [1,2];
arr1 = [1,2,3];
const atLeastTwo = (arr, callback) => {
    if(callback(arr)){
        console.log("True");
    }
    else{
        console.log("False");
    }
}

atLeastTwo(arr, check);
atLeastTwo(arr1, check);