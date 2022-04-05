// Write a function delay that returns a promise. And that promise should return a setTimeout that calls resolve after 1000ms

const result = new Promise((resolve, reject) =>{
    let message = "Hello!";
    setTimeout(()=> {
        reject(message);
    }, 1000); setTimeout
})

Promise.all([result]).catch((res)=>{
    console.log(res);
})