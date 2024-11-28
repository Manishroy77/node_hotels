const express = require('express');
const router = express.Router();
const menu = require('..//Models/menuSchema');

router.post('/',async(req,res)=>{
    try{
      const data = req.body;
      const newMenu = new menu(data);
      const response = await newMenu.save();
      console.log('data saved');
      res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error :'internal server error'})     
    }
});

router.get('/', async(req,res)=>{
    try{
      const response = await menu.find();
      console.log('data fatched');
      res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error :'internal server error'})  
    }
})



router.get('/:tasType',async(req,res)=>{
  try{
    const tasType = req.params.tasType;
    if(tasType == 'sweet'||tasType == 'spicy' || tasType == 'sour'){
      const response = await menu.find({taste : tasType});
      console.log('data finded');
      res.status(200).json(response);
    }else{
      res.status(404).json({error : 'invalid tasType'})
    }
  }catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'})
  }
})

module.exports = router;