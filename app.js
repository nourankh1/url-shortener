const express=require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Url = require('./models/Url');
const { nanoid } = require('nanoid');

const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/')
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch(err => console.error(err));

app.post('/shortenurl',async (req,res)=>{
    const originalUrl=req.body.originalUrl;
    const shortCode=nanoid(6);
    const newurl=new Url({originalUrl,shortCode});
    await newurl.save();

    res.json({shortUrl: `http://localhost:5000/${shortCode}`});
});

app.get('/:shortCode',async (req,res) =>{
    const shortCode = req.params.shortCode; //destructuring the value from the URL path
    const foundshortUrl=await Url.findOne({shortCode});

    if(foundshortUrl)
        res.redirect(foundshortUrl.originalUrl);
    else
    res.status(404).json({error: 'Short URL is not found'});
});

app.listen(5000,()=> {
    console.log('Server running on http://localhost:5000');
});