const express = require('express');
const dbFuncs = require("./dbFunctions");

const router = express.Router();

router.get('/', async (req,res) => {
    try{
      const response = await dbFuncs.get()
        console.log("response",response);
        res.status(200).json(response);
    } catch(err){
        console.log(err);
        res.status(500).send("error",err);
    }
  })
  
  
  router.get('/:id', async (req,res) => {
    const id = req.params.id;
    try{
      const response = await dbFuncs.getID(id)
        console.log(response);
        if(response){
          res.status(200).json(response);
        } else {
          res.status(404).send(`ID:${id} was not found`);
        }
    } catch(err){
        console.log(err);
        res.status(500).send("error",err);
    }
  })

  router.post('/', async (req,res) => {
    try{
      const response = await dbFuncs.insert(req.body)
        console.log(response);
        res.status(201).json(response)
    } catch(err){
        console.log(err);
        res.status(500).send(err);
    }
  })
  
  router.put('/:id', async (req,res) => {
  const id = req.params.id;
  const {name} = req.body;
    try{
        const response = await dbFuncs.update(id,name);
        if(response){
          res.status(200).json(response);
        } else {
          res.status(404).send(`ID:${id} was not found`);
        }
    } catch(err){
        console.log(err);
        res.status(500).send(err);
    }
  })
  
  router.delete('/:id', async (req,res) => {
      const id = req.params.id;
    try{
      const response = await dbFuncs.delete(id);
      console.log(response);
      res.status(200).json(response);
    }catch(err){
      console.log(err);
      res.status(500).send(err);
    }
  })

  module.exports =  router;