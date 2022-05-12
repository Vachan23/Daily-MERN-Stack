num1 = 2;
num2 = 3;

function add(){
    return (num1 + num2);
}

function sub(){
    return (num1 - num2);
}

function mult(){
    return (num1 * num2);
}

function div(){
    return (num1 / num2);
}

module.exports = {
    num1, num2, add, sub, mult, div
}