const express = require('express');
const router = express.Router();
const person = require('..//Models/personSchema');

router.post('/' , async(req,res)=>{
    try{
      const data = req.body;
      const newPerson = new person(data);
      const response = await newPerson.save();
      console.log('Data saved');
      res.status(200).json(response); 
    }catch(err){
      console.log(err);
      res.status(500).json({error :'internal server error'})
    }
})

router.get('/',async(req,res)=>{
    try{
    const response = await person.find();
    console.log('data fatchd');
    res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error :'internal server error'})  
    }
})

router.get('/:workType',async(req,res)=>{
    try{
      const workType = req.params.workType;
      if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
        const response = await person.find({work : workType});
        console.log('data fatched');
        res.status(200).json(response);
      }else{
        res.status(404).json({error : 'invalid workType'})
      }
    }catch(err){
        console.log(err);
        res.status(500).json({error :'internal server error'})  
    }
})

router.put('/:id',async(req,res)=>{
    try{
      const id = req.params.id;
      const updatePersonData = req.body;
      const updatePerson = await person.findByIdAndUpdate(id,updatePersonData,{
        new:true,
        runValidators : true,
      });
      if(!updatePerson){
        res.status(404).json({error :'person not find'})
      }
      res.json(updatePerson);
    }catch(err){
     console.error({error :'error updating person'});
     res.status(500).json({error :'Internal server error'});
    }
})


router.delete('/:id',async(req,res)=>{
    try{
     const id = req.params.id;
     const deletePerson = await person.findByIdAndDelete(id);
     console.log('data delete successfully');
     res.status(200).json(deletePerson);
    }catch(err){
     console.log(err);
     res.status(500).json({error:'Internal server error'})
    }
})


module.exports = router;