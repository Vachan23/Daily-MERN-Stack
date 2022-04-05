const result = new Promise((resolve, reject) =>{
    let message = "Hello!";
    setTimeout(()=> {
        resolve(message);
    }, 1000); setTimeout
})

Promise.all([result]).then((res)=>{
    console.log(res);
})