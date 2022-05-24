const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const router = express.Router();

let products = [
    {
        id: 1,
        product: 'shirt'
    },
    {
        id: 2,
        product: 'pant'
    },
    {
        id: 3,
        product: 'shoes'
    },
    {
        id: 4,
        product: 'hair product'
    },
]

router.use((req,res,next) => {
    console.log('In router middleware');
    next();
})

router.get('/product', (req,res) => {
    res.send(products);
})

router.get('/product/:id', (req,res) => {
    const {id} = req.params;

    let found = false;
    products.forEach(ele => {
        if(ele.id == id){
            found = true;
            res.send(ele);
        }
    })
    if(found){
        res.status(200);
    }else{
        res.status(500).send({
            message: 'invalid id',
        })
    }
})

router.post('/product', (req,res) => {
    const {name} = req.body;
    const {id} = req.body;

    found = false;
    products.forEach(ele => {
        if(ele.name == name || ele.id == id){
            found = true;
        }
    })
    if(found){
        res.status(500).send({
            message: 'Product or ID is already in the list. Use another id or name'
        })
    }else{
        products.push({
            id,
            name,
        })
        res.status(200).send({
            message: 'New product updated'
        })
    }
})

router.patch('/product/:id', (req,res) => {
    const {id} = req.params;
    const {name} = req.body;

    let found = false;
    products = products.map(ele => {
        if(ele.id == id){
            found = true;
            return{
                id,
                name,
            }
        }else return ele;
    })
    if(found){
        res.status(200).send({
            message: 'Succefully modified'
        })
    }else{
        res.status(500).send({
            message: 'not modified'
        })
    }
})

router.delete('/product/:id', (req,res) => {
    const {id} = req.params;

    let deleted = false;
    products = products.filter(ele => {
        if(ele.id !== id){
            return ele;
        }else{
            deleted = true;
        }
    })
    if(deleted){
        res.status(200).send({
            message: 'deleted'
        })
    }else{
        res.status(500).send({
            message: 'not deleted'
        })
    }
})

module.exports = router;