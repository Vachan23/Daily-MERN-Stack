const { EventEmitter } = require('events');

const timerEventEmitter = new EventEmitter;

// timerEventEmitter.emit('update');

let time = 0;

setInterval(()=>{
    time+=1
    timerEventEmitter.emit('update', time)
},1000);

timerEventEmitter.on('update', (time) => {
    console.log(`${time}`);
});