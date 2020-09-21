import React,{useContext, useState, useEffect} from "react";
import {View, StyleSheet,SafeAreaView, Image, TouchableOpacity, AsyncStorage, ImageBackground} from 'react-native'
import {Text, Input, Button} from 'react-native-elements'
import {Context as UserContext} from '../context/UserContext'
import { MaterialIcons } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'
import Spacer from "../components/Spacer";
import UserForm from '../components/UserForm';
import apiServer from '../api/apiServer';

const AccountScreen = () => {
    const {signout,state} = useContext(UserContext)
    // const [photo,setPhoto] = useState(state.info.image_url)
    // const [username, setUsername] = useState(state.info.username)
    // const [email,setEmail]= useState (state.info.email)

    useEffect(()=>{
        getPermissionAsync()
        
    },[])
    

    // const editUser = async(username, email,photo)=>{
    //     const userid = await AsyncStorage.getItem('userid')
    //     console.log(username)
    //     console.log(email)
    //     console.log(photo)
    //     try{
    //         const res = await apiServer.put(`/user/${userid}/update`, {username, email, photo})
    //         alert('User information updated!')
    //     }catch(err){
    //         alert('Try Again!')
    //     }
        
        
    // }


    const getPermissionAsync = async ()=>{
        if(Platform.OS !== 'web'){
            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if(status !== 'granted'){
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    // const pickImage = async()=>{
    //     try {
    //         let result = await ImagePicker.launchImageLibraryAsync({
    //             mediaTypes: ImagePicker.MediaTypeOptions.All,
    //             allowsEditing: true,
    //             aspect: [4,3],
    //             quality:1
    //         })
    //         if(!result.cancelled){
    //             setPhoto(result.uri)
    //         }
    //         console.log(result)
    //     }catch(err){
    //         console.log(err)
    //     }
    // }

    //TODO add picture/ add image_url attribute on backend
    return (
        <ImageBackground style={{flex:1}}source={require('../images/Signinbackground.jpg')}>

        <SafeAreaView>
            
            <View style={{flexDirection:"column", justifyContent:"center", alignItems:"center", paddingTop:60}}>
                <Text style={{color:"white"}}h3>Edit User Profile</Text>
            </View>
            {/* <View style={{marginLeft:15}}>
                <Text style={{marginLeft:50}}>Profile Image</Text>
                <TouchableOpacity  onPress={pickImage}>
                {photo ? null :<View style={{backgroundColor:"rgba(52, 55, 60,0.2)", width:200,height:200, borderRadius:15}}><Text style={{marginTop:80, alignSelf:"center"}}>Click to upload an image</Text></View>}
                    { photo && (
                        <Image
                        source={{uri: photo}}
                        style={{width:200, height:200, borderRadius:15}}
                        />
                    )}
                </TouchableOpacity>

            <Spacer/> */}
            {state.info ? <UserForm initialValues={{username: state.info.username, email: state.info.email, photo: state.info.image_url}} />: null}
            {/* <View>
                <Input 
                label="Username"
                value={username}
                onChangeText={setUsername}
                inputStyle={styles.input}
                labelStyle={styles.label}
                inputContainerStyle={styles.inputContainter}
                />
                <Input 
                label="Email"
                value={email}
                onChangeText={setEmail}
                inputStyle={styles.input}
                labelStyle={styles.label}
                inputContainerStyle={styles.inputContainter}
                />
                <Button buttonStyle={{backgroundColor:"#1359c4"}} style={styles.button} title={"Confirm Changes"} onPress={()=>{editUser(username,email,photo)}}/> 
            </View> */}
            {/* </View> */}
            <Spacer/>
            
            <Button buttonStyle={{backgroundColor:"#1359c4"}} style={styles.button} title={"Click to sign out"} onPress={signout}></Button>
            
        </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    button:{
        width: 300,
        borderRadius:15,
        paddingBottom: 15,
        marginTop: 50,
        marginLeft: 50,
        justifyContent:"center",
        alignItems:"center"
    }
})

AccountScreen.navigationOptions =()=>{
    return{
        title: 'Account',
        tabBarIcon: <MaterialIcons name="portrait" size={24} color="grey" />
    }
}
export default AccountScreen;