const express = require('express');
const wikiRouter = express.Router();
const main = require('../views/main');
const addPage = require('../views/addPage')
const {Page} = require('../models/index')



wikiRouter.get('/',(req,res)=>{
    res.send(main());
});
wikiRouter.post('/',(req,res)=>{
    let name = req.body.name 
    let content = req.body.content
    console.log('this is ', name, 'this is ', content)
    const page = new Page({
        name: 'name',
        content : 'content'
    })
    res.send('got to POST /wiki/');
});
wikiRouter.get('/add',(req,res)=>{
    res.send(addPage());
});


module.exports = wikiRouter;