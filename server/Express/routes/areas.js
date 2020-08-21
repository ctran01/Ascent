const express = require('express');
const {requireAuth} = require('../middlewares/auth');
const {asyncHandler} = require('../middlewares/utils');
const {Area} = require('../db/models');
const router = express.Router();


//router.use(requireAuth);

const areaNotFound = (id) =>{
  const err = new Error('Area was not found');
  err.status = 404
  err.title = "Area was not found";
  return err
}


//GET all Area
router.get('/', asyncHandler(async(req,res,next)=>{
  const area = await Area.findAll()
  
  res.json({area})
}))

//Add Area

router.post('/', asyncHandler(async(req,res,next)=>{
  const { name, description, user_id} = req.body
  try{
    const area = await Area.create({name:name,description:description,user_id:user_id})
    res.status(201).json({area})
  }catch(err){
    res.status(422).send(err.message)
  }

}))

router.get('/:id', asyncHandler(async(req,res,next)=>{
  const areaId = parseInt(req.params.id,10);
  const area = await Area.findByPk(areaId);

  if(area){
    res.json({area});
  } else{
    next(areaNotFound(areaId))
  }

  
}))


module.exports = router