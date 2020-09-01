const express = require('express');
const {requireAuth} = require('../middlewares/auth');
const {asyncHandler} = require('../middlewares/utils');
const {Area, User,Route,Follower} = require('../db/models');


const router = express.Router();

//router.use(requireAuth)

const routeNotFound = (id)=>{
  const err = new Error("Route was not found");
  err.status = 404
  err.title = "Route was not found"

  return err
}


//GET all Routes
router.get('/', asyncHandler(async(req,res,next)=>{
  const route = await Route.findAll()
  
  res.json({route})
}))


//get specific route
router.get('/:id', asyncHandler(async(req,res,next)=>{
  const routeId = parseInt(req.params.id,10)
  const route = await Route.findByPk(routeId,{
    include: [{model: User, attributes: ["username"]}]
  
    }
      );

  if(route){
    res.json({ route });
  } else{
    next(routeNotFound(routeId));
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

//Edit Route
router.put('/:id', asyncHandler(async(req,res,next)=>{
  const routeid = parseInt(req.params.id,10)
  const {name,grade, type, latitude, longitude,description} = req.body
  const route = await Route.update({name:name,grade:grade, type:type, latitude:latitude, longitude:longitude,description:description},{
    where: {
      id : routeid
    },
    include:[{model: User, attributes:["username"]}]
  })
  res.json({route})
  // console.log(req.body)
 
}))

//Delete route
router.delete('/:id', asyncHandler(async(req,res,next)=>{
  const routeid = parseInt(req.params.id,10)
  const route = await Route.destroy({
    where: {
      id: routeid
    }
  })
  res.json({"message": "route deleted"})
}))

//Follow Route

router.post('/user/:userid/:type/:routeId', asyncHandler(async(req,res,next)=>{
  //followable_type = "route"
  //followable_id = routeId
  //user_id = userId
  const routeId = parseInt(req.params.routeId,10)
  const userId = parseInt(req.params.userid,10)
  const type = req.params.type
  try{
    const areaFollow = await Follower.create({followable_type : type, followable_id: routeId, user_id: userId})
    res.json({"message": "Route  followed"})
  }catch(err){
    res.status(422).send(err.message)
  }
}))


module.exports = router