function job() {
return new Promise(function(resolve, reject) {
reject();
});
}
let promise = job();
promise
.then(function() {
console.log('Success 1');
})
.then(function() {
console.log('Success 2');
})
.then(function() {
console.log('Success 3');
})
.catch(function() {
console.log('Error 1');
})
.
then(function(){
    console.log('Success4');
});

// output will be Error 1, Success4
