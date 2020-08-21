const express = require('express');
const {requireAuth} = require('../middlewares/auth');
const {asyncHandler} = require('../middlewares/utils');
const {Route, User} = require('../db/models');


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


//Add Route
router.post('/', asyncHandler(async(req,res,next)=>{
  const { name, description, grade,type,latitude,longitude,user_id,area_id} = req.body
  try{
    const route = await Route.create({name,description,grade,type,latitude,longitude,user_id, area_id})
    res.status(201).json({route})
  }catch(err){
    res.status(422).send(err.message)
  }

}))


//get routes created by user

router.get('/user/:userid', asyncHandler(async(req,res,next)=>{
  const userId = parseInt(req.params.userid,10)
  const routes = await Route.findAll({
    where: {
      user_id : userId
    },
    include: [{model: User, attributes:["username"]}]
      
    
  });
  res.json({routes})
}))

module.exports = router