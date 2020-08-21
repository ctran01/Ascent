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
  return async(name,description,navigateAway,alertMessage)=>{
    const userid = await AsyncStorage.getItem('userid')
    const res = await apiServer.post("/area",{
      name: name,
      description: description,
      user_id: userid
    })
    if(navigateAway){
      navigateAway();
    }
    if(alertMessage){
      alertMessage();
    }
  }
}

//Edit Area

const editArea = (dispatch)=>{
  return async(name,description,callback1,callback2)=>{
    const userid = await AsyncStorage.getItem('userid')
    const res = await apiServer.put(`/area/${id}`)
    dispatch({type: "edit_area", payload: {id,name,description}})
    if(callback1){
      callback1();
    }
  }
}

export const {Provider,Context} =  createDataContext(areaReducer, {getArea, addArea}, [])