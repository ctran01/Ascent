import React from 'react';
import createDataContext from './createDataContext'
import apiServer from '../api/apiServer'
import {navigate} from '../setNavigator'
import { AsyncStorage } from 'react-native';

const areaReducer =(state,action)=>{
  switch(action.type){
    case "get_areas":
      return action.payload
    case "get_area":
      return action.payload
    
    case "get_user_areas":
      return action.payload

    // case "edit_area":
    //   return state.map((area)=>{
    //     return area.id === action.payload.id ? action.payload : area;
    //   })
    default:
      return state
  }

};

//Get all areas
const getAreas = (dispatch)=>{
  return async ()=>{
    
    const res = await apiServer.get("/area");
    dispatch({type: "get_areas", payload: res.data})
  }
}

//Get 1 area

const getArea =(dispatch)=>{
  return async (id)=>{
    const res = await apiServer.get(`/area/${id}`);
    dispatch({type: "get_area", payload: res.data})
  }
}

//get areas created by user
const getUserAreas = (dispatch)=>{
  return async (id) =>{
    const userid = await AsyncStorage.getItem('userid')
    const res = await apiServer.get(`/area/user/${userid}`)
    dispatch({type: "get_user_areas", payload: res.data.areas})
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
  return async(id,name,description,navigateAway,alertMessage)=>{

    const res = await apiServer.put(`/area/${id}`, {name,description})
    dispatch({type: "edit_area", payload: {id,name,description}})
    if(navigateAway){
      navigateAway();
    }
    if(alertMessage){
      alertMessage();
    }
  }
}

const delArea = (dispatch) =>{
  return async(id,navigateAway,alertMessage)=>{
    const res = await apiServer.delete(`/area/${id}`)
    if(navigateAway){
      navigateAway();
    }
    if(alertMessage){
      alertMessage();
    }
  }
}

export const {Provider,Context} =  createDataContext(areaReducer, {getAreas, addArea, getArea, editArea, delArea, getUserAreas}, [])