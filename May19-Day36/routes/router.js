const express = require('express');
// const { use } = require('./AuthRouter');
// const app = express();
// const PORT = 8000;

const router = express.Router();

let userData = [
    {
        firstName: 'vachan',
        username: 'vachan@gmail.com',
        password: 'abc',
    },
    {
        firstName: 'ajay',
        username: 'ajay@gmail.com',
        password: 'abc',
    },
    {
        firstName: 'yashas',
        username: 'yashas@gmail.com',
        password: 'abc',
    },
    {
        firstName: 'vyshak',
        username: 'vyshak@gmail.com',
        password: 'abc',
    }
]

router.use((req, res, next) => {
    console.log('In the router middleware');
    next();
})

router.get('/users', (req,res) => {
    res.send(userData)
}).post('/signup', (req,res) => {
    const {firstName} = req.body;
    const {username} = req.body;
    const {password} = req.body;

    let found = false;
    let newUser;
    check = userData.forEach(ele => {
        if(ele.username === username) {
            // res.send("Found");
            found = true;
        }else{
            newUser = {
                firstName: firstName,
                username: username,
                password: password
            }
        }
    })
    if(found){
        res.status(500).send("USE ANOTHER USERNAME AND PASSWORD");
    }else{
        userData.push(newUser);
        res.send("SignUp successful")
    }
}).post('/login', (req,res) => {
    const {username} = req.body;
    const {password} = req.body;
    let successful = false;
    userData.forEach(ele => {
        
        if(ele.username === username && ele.password === password){
            successful = true;
        }
    })
    if(successful == true){
        res.status(200).send("LOGIN SUCCESSFUL");
    }else{
        res.status(500).send("Invalid username or password");
    }
})


module.exports = router;