const checkNumber = (num) => {
    if(isNaN(num)){
        return false;
    }
    else{
        return true;
    }
}

const result = (check) => {
    n = 5;
    if (checkNumber(n) == true){
        console.log("TRUE");
    }
    else{
        console.log("FALSE");
    }
}

result(checkNumber)