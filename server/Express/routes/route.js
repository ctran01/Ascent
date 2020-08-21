const express = require('express');
const {requireAuth} = require('../middlewares/auth');
const {asyncHandler} = require('../middlewares/utils');
const {Route} = require('../db/models');


const router = express.Router();

//router.use(requireAuth)

const routeNotFound = (id)=>{
  const err = new Error("Route was not found");
  err.status = 404
  err.title = "Route was not found"

  return err
}

router.get('/:id', asyncHandler(async(req,res,next)=>{
  const routeId = parseInt(req.params.id,10)
  const route = await Route.findByPk(routeId);

  if(route){
    res.json({ route });
  } else{
    next(routeNotFound(routeId));
  }

}))

router.post('/', asyncHandler(async(req,res,next)=>{
  const { name, description, grade,type,latitude,longitude,user_id,area_id} = req.body
  try{
    const area = await Route.create({name,description,grade,type,latitude,longitude,user_id, area_id})
    res.status(201).json({Route})
  }catch(err){
    res.status(422).send(err.message)
  }

}))


module.exports = router