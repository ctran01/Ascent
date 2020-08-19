import React,{useContext} from "react";
import {View, Text, StyleSheet,SafeAreaView} from 'react-native'
import {Button} from 'react-native-elements'
import {Context as UserContext} from '../context/UserContext'

const AccountScreen = () => {
    const {signout} = useContext(UserContext)
    
    return (
        <SafeAreaView>
            <Text>Your Account</Text>
            <Button buttonStyle={{backgroundColor:"#1359c4"}} style={styles.button} title={"Sign out"} onPress={()=>signout}></Button>
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
export default AccountScreen;