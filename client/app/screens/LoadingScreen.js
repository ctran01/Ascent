import React, {useEffect, useContext} from 'react';
import {Context as UserContext} from '../context/UserContext';

const LoadingScreen = () => {
  const {tryLocalSignin} = useContext(UserContext)
  useEffect(()=>{
    tryLocalSignin()
  }, [])
  return null
}

export default LoadingScreen;