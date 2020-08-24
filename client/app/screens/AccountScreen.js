import React,{useContext} from "react";
import {View, Text, StyleSheet,SafeAreaView} from 'react-native'
import {Button} from 'react-native-elements'
import {Context as UserContext} from '../context/UserContext'
import { MaterialIcons } from '@expo/vector-icons'; 

const AccountScreen = () => {
    const {signout} = useContext(UserContext)
    //TODO add picture/ add image_url attribute on backend
    return (
        <SafeAreaView style={{flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            
            <Text>Your Account</Text>
            <Button buttonStyle={{backgroundColor:"#1359c4"}} style={styles.button} title={"Sign out"} onPress={signout}></Button>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    button:{
        width: 300,
        borderRadius:15,
        paddingBottom: 15
    }
})

AccountScreen.navigationOptions =()=>{
    return{
        title: 'Account',
        tabBarIcon: <MaterialIcons name="person" size={24} color="white" />
    }
}
export default AccountScreen;