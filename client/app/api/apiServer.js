import axios from "axios";
import {AsyncStorage} from 'react-native';

const instance =  axios.create({
  baseURL: "http://112b8d8af82c.ngrok.io"
})

instance.interceptors.request.use(
  //Calls everytime we make an axios req
  //Config embeds jwt token to call every time
  async (config)=>{
    const token = await AsyncStorage.getItem('token') 
    if(token){
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config
  },
  //Error
  (err)=>{
    return Promise.reject(err);
  }
)

export default instance