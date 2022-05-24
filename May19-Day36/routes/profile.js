const express = require('express');
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

router.use((req,res,next) => {
    console.log('In the router middleware(profile)');
    next();
})

router.get('/profile/:name', (req, res) => {
    const {name} = req.params;

    let found = false;
    userData.map(ele => {
        if(ele.firstName === name){
            found = true;
            res.send(ele)
        }
    })
    if(!found) {
        res.send('invalid username');
    }
})

module.exports = router;