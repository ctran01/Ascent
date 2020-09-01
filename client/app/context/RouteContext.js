import React from 'react';
import createDataContext from './createDataContext'
import apiServer from '../api/apiServer'
import { AsyncStorage } from 'react-native';
  const routeReducer = (state,action) =>{
    switch(action.type){
      case "get_routes":
        return action.payload
      case "get_route":
        return action.payload
      case "get_user_routes":
        return action.payload
      case "get_followed_routes":
        return action.payload
      default:
        return state
    }
  }
  
  const addRoute = (dispatch)=>{
    return async(name,grade,type,latitude,longitude,description,navigateAway,alertMessage)=>{
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


  //Get all areas
const getRoutes = (dispatch)=>{
  return async ()=>{
    
    const res = await apiServer.get("/route");
    dispatch({type: "get_routes", payload: res.data})
  }
}

//Get 1 area

const getRoute =(dispatch)=>{
  return async (id)=>{
    const res = await apiServer.get(`/route/${id}`);
    dispatch({type: "get_route", payload: res.data})
  }
}

//get routes created by user
const getUserRoutes = (dispatch)=>{
return async (id) =>{
  const userid = await AsyncStorage.getItem('userid')
  const res = await apiServer.get(`/route/user/${userid}`)
  dispatch({type: "get_user_routes", payload: res.data.routes})
}
}

//get followed routes 
const getFollowedRoutes = (dispatch)=>{
  return async() =>{
    const userid = await AsyncStorage.getItem('userid')
    const res = await apiServer.get(`/route/user/${userid}/follows`)
    dispatch({type: "get_followed_routes", payload: res.data.user.followedRoutes})
  }
}




//delete route
const deleteRoute = (dispatch)=>{
  return async(id,navigateAway,alertMessage)=>{
    const res = await apiServer.delete(`/route/${id}`)
    if(navigateAway){
      navigateAway();
    }
    if(alertMessage){
      alertMessage();
    }
  }
}

const editRoute = (dispatch)=>{
  return async(id,name,grade, type, latitude,longitude, description,navigateAway,alertMessage)=>{

    const res = await apiServer.put(`/route/${id}`, {name,grade, type, latitude, longitude,description})
    dispatch({type: "edit_route", payload: {id,name,grade,type,latitude,longitude,description}})
    if(navigateAway){
      navigateAway();
    }
    if(alertMessage){
      alertMessage();
    }
  }
}


const unfollowRoute = async(id) =>{
    
  const userid = await AsyncStorage.getItem('userid')

  const res = await apiServer.delete(`/follow/user/${userid}/route/${id}`)


}

//Follow Area

const followRoute = (dispatch)=>{
  return async(id,navigateAway,alertMessage,failMessage) =>{
    const userid = await AsyncStorage.getItem('userid')
    try{

      const res = await apiServer.post(`/follow/user/${userid}/route/${id}`)
      if(navigateAway){
        navigateAway();
      }
      if(alertMessage){
        alertMessage();
      }
    }catch(err){
      unfollowRoute(id);
      failMessage();
    }
  }
}
 


export const {Context,Provider} = createDataContext(routeReducer, {addRoute,deleteRoute,editRoute,getRoute,getRoutes,getUserRoutes,followRoute, getFollowedRoutes}, [])