import createDataContext from './createDataContext';
import apiServer from '../api/apiServer';
import {AsyncStorage} from 'react-native';
import {navigate} from '../setNavigator'

const userReducer = (state,action) =>{
  switch(action.type){
    case 'add_error':
      return {...state, errorMessage: action.payload}
    case 'clear_error_message':
      return {...state, errorMessage: ''}
    case 'signin':
      return {token: action.payload.token, errorMessage:'', userid: action.payload.userid, info: action.payload.info}
    case 'signout':
      return {token: null, errorMessage: '', userid: null, info: null}
    default:
      return state;
  }
}

//Actions
const tryLocalSignin = (dispatch)=>{
  return async()=>{
    const token = await AsyncStorage.getItem('token');
    const id = await AsyncStorage.getItem('userid')
    if(token){
      dispatch({type: 'signin', payload: {token:token, userid:id}})
      navigate('mainFlow')
    }else{
      navigate('loginFlow')
    }
    
  }
}
const clearErrorMessage = (dispatch) =>{
  return ()=>{
    dispatch({type: 'clear_error_message'});

  }

}

const signup = (dispatch) =>{
  return async ({username,email, password, navigation})=>{
    try{
      const res = await apiServer.post('/signup', {username,email,password});
      const id = res.data.user.id.toString()
      await AsyncStorage.setItem('token', res.data.token) //Sets token to "local storage"
      await AsyncStorage.setItem('userid',id)
      dispatch({type: 'signin', payload: {token: res.data.token, userid: id, info: res.data.info}}) //Set token to state
      navigate('mainFlow')
    }catch(err){
      console.log(err)
      dispatch({type: 'add_error', payload: 'Something went wrong with sign up'})
    }
  }
}

const signin = (dispatch) =>{
  return async ({email,password})=>{
    try{
      const res = await apiServer.post('/signin', {email,password});
      const id = res.data.user.id.toString()
      await AsyncStorage.setItem('token',res.data.token)
      await AsyncStorage.setItem('userid',id)
      
      dispatch({type: 'signin', payload: {token: res.data.token, userid: id, info: res.data.info}})
      navigate('mainFlow')
    }catch(err){
      console.log(err)
      dispatch({type: 'add_error', payload: "Something went wrong with sign in"})
    }
  }
}

const signout = (dispatch) =>{
  return async ()=>{
    const token = await AsyncStorage.removeItem('token')
    const id = await AsyncStorage.removeItem('id')
    dispatch({type: 'signout'})
    navigate('loginFlow')
  }
}


export const {Provider,Context} = createDataContext( userReducer, {signin,signout,signup,clearErrorMessage,tryLocalSignin}, {token: null, errorMessage:'', userid: null, info: null})