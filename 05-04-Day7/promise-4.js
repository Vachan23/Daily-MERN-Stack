let fetchData4 = new Promise((resolve, rejct) =>{
    setTimeout(() => {
        resolve("Promise has been resolved");
    }, 1000);

    console.log("not a promise");
});