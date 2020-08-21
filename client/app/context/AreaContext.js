import React from 'react';
import createDataContext from './createDataContext'
import apiServer from '../api/apiServer'
import {navigate} from '../setNavigator'
import { AsyncStorage } from 'react-native';

const areaReducer =(state,action)=>{
  switch(action.type){
    case "get_area":
      return action.payload

    default:
      return state
  }

};

//Get all areas
const getArea = (dispatch)=>{
  return async ()=>{
    const res = await apiServer.get("/area");
    
    dispatch({type: "get_area", payload: res.data})
  }
}

//Add area
const addArea =(dispatch) =>{
  return async(name,description)=>{
    const user_id = await AsyncStorage.getItem('user_id')
    const res = await apiServer.post("/area",{
      name: name,
      description: description,
      user_id: user_id
    })
  }
}

export const {Provider,Context} =  createDataContext(areaReducer, {getArea}, [])