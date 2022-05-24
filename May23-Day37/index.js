const express = require('express');
const app = express();
const PORT = 5000;


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/age', (req,res, next) => {
    const {age} = req.body;
    if(age >= 18 && age <= 200){
        res.status(200).send({
            message: "Eligible to vote"
        });
    }
    else if(age < 18 && age > 0){
        res.status(400).send({
            message: "Not eligible to vote"
        });
    }
    else{
        res.status(402).send({
            message: "Invalid age"
        })
    }
})


app.listen(PORT, () => {
    console.log("Server running on PORT:", PORT);
})