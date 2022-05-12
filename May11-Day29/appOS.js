// const os = require('os')
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

// eventEmitter.on('start', () => {
//     console.log('started')
//   })

eventEmitter.on('name', (name, index, isPresent) => {
    console.log("name is ", name, index, isPresent)
})

eventEmitter.emit('name', 'Suraj', 100, true)

// eventEmitter.on('start', number => {
//     console.log(`started ${number}`)
// })
  
// eventEmitter.emit('start', 23)

//using eventNames()
console.log(eventEmitter.eventNames())

// using os.arch()
// console.log("os.arch()" , os.arch());

//using os.cpus()
// console.log("os.cpus()" , os.cpus());

//using os.homedir()
// console.log("os.homedir()" , os.homedir());

//using os.hostname()
// console.log("os.hostname()" , os.hostname());

//using os.type()
// console.log("os.type()" , os.type());

//using os.userInfo()
// console.log("os.userInfo()" , os.userInfo());
