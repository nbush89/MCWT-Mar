const express = require("express");
const routes = express.Router();
const items = []
routes.get('/',(req, res)=>{
    //logic that is needed
})

routes.get('/:someString', (req, res)=>{
    let id = req.params.someString;
    let query = req.query.myQueryParameter;
    //404 204 200 300
    res.status(200).json('THIS IS WHAT I SEND BACK')
    res.send()
})
module.exports = routes;