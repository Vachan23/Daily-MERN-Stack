// let string = 'abc';
// b = '';
// for(i=0;i<string.length;i++){
//     b+=string[i].repeat(2);
// }
// console.log(b);

const duplicate = (string, b) => {
    for(i=0;i<string.length;i++){
        b+=string[i].repeat(2);       // b += string.charAt[i]+string.charAt[i];
    }
    console.log(b);
}

const result = (callback) => {
    string = 'abc';
    b = '';
    callback(string,b);
}

result(duplicate);