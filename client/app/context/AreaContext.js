import React from 'react';
import createDataContext from './createDataContext'
import apiServer from '../api/apiServer'
import {navigate} from '../setNavigator'

const areaReducer =(state,action)=>{
  switch(action.type){


    default:
      return state
  }

}


export const {Provider,Context} =  createDataContext(areaReducer, {}, )