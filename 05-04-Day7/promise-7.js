const resolved = new Promise((resolve, reject) =>{
    let message = "RESOLVED!";
    setTimeout(()=> {
        resolve(message);
    }, 1000); setTimeout
})

const rejected = new Promise((resolve, reject) =>{
    let message = "REJECTED!";
    setTimeout(()=>{
        resolve(message);
    }, 2000); setTimeout
})

Promise.all([resolved, rejected]).then((res)=>{
    console.log(res);
})