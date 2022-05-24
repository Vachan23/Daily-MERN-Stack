var express = require('express');
var router = express.Router();

let studentData = [
    {
        id:1,
        name:'vachan',
    },
]


router.route('/').get((req,res) => {
    res.send(studentData);
}).post(function(req,res){
    const {name} = req.body;

    let found = false;
    studentData.forEach(el =>{
        if(el.name === name){
            found = true;
        }
    })
    if(found){
        res.status(500).send({
            message :"cannot save similar data",
        })
    }else{
        studentData.push({
            id:Math.floor(Math.random()*10000).toString(),
            name,
        })

        res.status(200).send({
            message:"data successful"
        })
    }
})

router.route('/:id').patch((req,res )=>{
    const {name} = req.body;
    const {id} = req.params;

    let modified = false;

    studentData = studentData.map(el =>{
        if(el.id == id){
            modified =true;
            return{
                id,
                name,
            }
        }else return el;
    })

    if(modified){
        res.status(200).send({
            message :"data modified",
        })
    }else {
        res.status(200).send({
            message :" unsuccessful"
        })
    }
}).delete((req,res) => {
    const {id} = req.query;
    // const {name} = res.body;

    let deleted = false;
    studentData = studentData.filter(el => {
        if(el.id !== id){return el}
        else {
            deleted =true;
        }
    });

    if(deleted){
        res.send({
            message :"student deleted"
        })
    }else{
        res.send({
            message :"unable to delete"
        })
    }
})


module.exports = router;