const express = require('express');

const app = express();
// const router = express.Router();
const PORT = 5000;
let shoppingList = [
    {
        id:1,
        item:'bottle'
    },
    {
        id : 2,
        item:'cap'
    },
    {
        id:3,
        item:'toy'
    },
    {
        id:4,
        item:'soft toy'
    }
]

// using json format
app.use(express.json())

// using urlencoded format
app.use(express.urlencoded({ extended: true }));

// 1
app.get('/items', (req,res,next) => {
    res.send(shoppingList)
})

// 2
app.post('/items',(req,res) => {
    const {item} = req.body;
    // const {id} = req.query;

    found = false;
    shoppingList.forEach(el => {
        if(el.item === item){
            found = true;
        }
    })

        if(found){
            res.status(500).send({
                message: "Item not added",
        })
        }else{
            shoppingList.push({
                id: Math.floor(Math.random()*10).toString(),
                item,
            })
            res.status(200).send({
                message: "Item added successfully",
        })
        }
})

// 3
app.get('/items/:id', (req,res) => {
    // const id = parseInt(req.params.id)
    const {id} = req.params;

    let item={} , found = false;
    shoppingList.forEach(ele => {
        if(ele.id == id) {
            // res.send("ITEM FOUND");
            // res.send(ele)
            item = ele;
            found = true;
        }
    })
    if(found){
        res.send(item)
    }

})

// 4
app.patch('/items/:id', (req,res) => {
    const {id} = req.params;
    const {item} = req.body;

    let modified = false;

    shoppingList = shoppingList.map(ele => {
        if(ele.id == id){
            modified = true;
            return{
                id,
                item,
            }
        }else return ele;
    })

    if(modified){
        res.status(200).send({
            message: 'data modified',
        })
    }else{
        res.status(500).send({
            message: 'data not modified',
        })
    }
})

// 5
app.delete('/items/:id', (req,res) => {
    const {id} = req.params;

    let deleted = false;
    shoppingList = shoppingList.filter(ele => {
        if(ele.id != id){
            return ele;
        }else{
            deleted = true
        }
    });
    if(deleted){
        res.send({
            message: 'deleted',
        })
    }else{
        res.send({
            message: 'not deleted',
        })
    }
})


app.listen(PORT, () => {
    console.log("Server is running on", PORT);
})
