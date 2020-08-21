import React from 'react';
import createDataContext from './createDataContext'
import apiServer from '../api/apiServer'
import { AsyncStorage } from 'react-native';
  const routeReducer = (state,action) =>{
    switch(action.type){

      default:
        return state
    }
  }
  
  const addRoute = (dispatch)=>{
    return async(name,description,grade,type,latitude,longitude,navigateAway,alertMessage)=>{
      const userid = await AsyncStorage.getItem('userid')
      const res = await apiServer.post("/route",{
        name: name,
        description: description,
        grade : grade,
        type: type,
        latitude: latitude,
        longitude: longitude,
        user_id: userid,
        //TODO area dropdown in route form
        area_id: 1
      })
      if(navigateAway){
        navigateAway();
      }
      if(alertMessage){
        alertMessage();
      }
    }
  }

  const deleteRoute = (dispatch)=>{
    return async()=>{

    }
  }

  const editRoute = (dispatch)=>{
    return async()=>{

    }
  }
 


export const {Context,Provider} = createDataContext(routeReducer, {addRoute,deleteRoute,editRoute}, [])