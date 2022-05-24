const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log('In the router middleware');
    next();
})

router.get('/login', (req, res) => {
    res.send("abc@gmail.com")
})

router.post('/login', (req, res) => {
    res.send("details are submitted")
})

router.get('/', (req, res) => {
    res.send("in auth module")
})

module.exports = router;
