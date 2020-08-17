import React,{useContext} from "react";
import {View, Text, StyleSheet, Button} from 'react-native'
import {Context as UserContext} from '../context/UserContext'
const AccountScreen = () => {
    const {signout} = useContext(UserContext)
    return (
        <View>
            <Button title={"Sign out"} onPress={()=>signout}></Button>
        </View>
    );
}

const styles = StyleSheet.create({

})
export default AccountScreen;