const express = require('express');
const {requireAuth} = require('../middlewares/auth');
const {asyncHandler} = require('../middlewares/utils');
const {Area, User,Route,Follower} = require('../db/models');

const router = express.Router();
//router.use(requireAuth)

router.post('/:userId/:type/:typeId', asyncHandler(async (req,res)=>{
  const userId = parseInt(req.params.userId, 10);
  const typeId = parseInt(req.params.typeId, 10);
  const type = parseInt(req.params.type, 10);

  
}))

module.exports = router