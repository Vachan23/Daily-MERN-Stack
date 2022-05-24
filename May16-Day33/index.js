const express = require('express');

const app = express();
const PORT = 8000;

const authors = [
    {
        id:1,
        name:'vachan',
        book: 'book1'
    },
    {
        id:2,
        name:'yash',
        book: 'book2'
    },
    {
        id:3,
        name:'abc',
        book: 'book3'
    }
]

const users =  [{
    id: 1,
    name: 'Suraj'
    },
    {
    id: 2,
    name: 'Ajay'
    },
    {
    id: 3,
    name: 'Apple'
    },
]
    

app.get('/', (req, res) => {
    res.send('Welcome to expressjs')
})

app.get('/authors', (req, res) => {
    res.send(authors);
})

app.get('/users/:id', (req,res) => {
    const id = parseInt(req.params.id)
    users.forEach(element => {
        if (element.id === id){
            res.send(element);
        }
    })
})

app.listen(PORT, () => {
    console.log("Server is started on", PORT)
})