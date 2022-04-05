// Create another promise. Now have it reject with a value of "Rejected!" without using setTimeout. Print the contents of the
// promise after it has been rejected by passing console.log to .catch


// const resolved = new Promise((resolve, reject) =>{
//     let message = "RESOLVED!";
//     resolve(message)
// })

// const rejected = new Promise((resolve, reject) =>{
//     let message = "REJECTED!";
//     reject(message);
// })

// Promise.all([rejected]).then((res)=>{
//     console.log(res);
// })

// processUserInput.then((name) => accepted(name), (name) => rejected(name)).then((message) => alert(message));

const resolved = (num) => {
    num = "RESOLVED!";
    console.log(num);
}

const rejected = (num) =>{
    num = "REJECTED!";
    console.log(num);
}
const process = new Promise((resolve, reject) => {
    let num = 5;
    if(num>10){
        resolve(num);
    }
    else{
        reject(num);
    }
})

process.then((num) => resolved(num)).catch((num) => rejected(num));