let secondPromise = new Promise((resolve, reject) => {
    resolve("second!");
});
let firstPromise = new Promise((resolve, reject) => {
    resolve(secondPromise);
});