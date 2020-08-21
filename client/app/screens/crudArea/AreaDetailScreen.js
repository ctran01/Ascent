import React, { useState } from "react";
import {View, Text, StyleSheet} from 'react-native'
import apiServer from '../../api/apiServer'
const AreaDetailPage = ({navigation}) => {
    const id = navigation.getParam('id')
    const [area, setArea] = useState(null)

    const getArea = async(id)=>{
        try{
            const res = await apiServer.get(`/area/${id}`)
            setArea(res.data)
        }catch(err){
            console.log(err)
        }
    }
    return (
        <View>
            <Text>
                Area Detail Page
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({

})
export default AreaDetailPage;