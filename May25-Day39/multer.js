const express = require('express');
const multer = require('multer');

const app = express();

const imageStorage = multer.diskStorage({
    destination: './uploads',
    filename: (req,file,callback) => {
        callback(null, file.originalname)
    }
})

const imageUpload = multer({
    storage: imageStorage,
})

const pdfStorage = multer.diskStorage({
    destination: './pdfs',
    filename: (req,file,callback) => {
        callback(null,file.originalname)
    }
})

const pdfUpload = multer({
    storage: pdfStorage,
})

app.get('/', (req,res) => {
    res.send('Res is invoked')
})

app.post('/uploadImage', imageUpload.single('image'), (req,res) => {
    res.status(200).send('Success!!!');
})

app.post('/uploadPDF', pdfUpload.array('pdf', 4), (req,res) => {
    res.status(200).send("Success!!!")
})

app.listen(8000, (req,res) => console.log("Server is running on port", 8000));
