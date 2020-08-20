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