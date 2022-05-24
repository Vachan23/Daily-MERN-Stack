const express = require('express');
const { use } = require('express/lib/application');

const app = express();
const PORT = 5000;

let userData = [
    {
        id: 1, 
        name: 'vachan', 
        contact: '9880100603', 
        age: '22'
    },
    {
        id: 2, 
        name: 'ajay', 
        contact: '1223548', 
        age: '22'
    },
    {
        id: 3, 
        name: 'suraj', 
        contact: '98751', 
        age: '23'
    }
]

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/users', (req,res) => {
    res.send(userData)
})

app.get('/users/:id', (req,res) => {
    const {id} = req.params;
    let user = {}
    userData.map(element => {
        if(element.id == id){
            user = element;
        }
        
    })

    res.send(user);
})

app.delete('/users/:id', (req,res) => {
    const {id} = req.params;
    
    deleted = false;
    // userData.filter(ele.id != id)
    userData = userData.filter(ele => {
        if(ele.id==id){
            deleted = true;
        }else{
            return ele
        }
    })
    if(deleted){
        res.status(200).send("ITEM DELETED");
    }else{
        res.status(500).send("ITEM NOT DELETED");
    }
})

app.patch('/users/:id', (req,res) => {
    const {id} = req.params;
    const {name} = req.body;

     modified = false;
    userData = userData.map(ele => {
        if(ele.id == id){
            modified = true;
            return {
                id,
                name,
            }
        }else{
            return ele;
        }
    })
    if (modified){
        res.status(200).send({
            message : 'Patch successful',
        })
    }else{
        res.status(500).send({
            message: 'Patch unsuccesful',
        })
    }
})


// const returnListOfUsers = (req,res,next) => {
//     console.log('>>>> returnListOfUsers');
//     res.send(data)
//     next();
// }

// app.use('/', [returnListOfUsers], (req,res,next) => {
//     console.log('use')
// })

// app.get('/', (req,res) => {
//     console.log('get');
// })

app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
})