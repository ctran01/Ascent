import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import apiServer from '../api/apiServer'


const SearchScreen = () => {
    const [searchTerm,  setSearchTerm] = useState('')
    const [areas, setAreas] = useState([])
    const [routes,setRoutes] = useState([])

    const getAreas = async ()=>{
        try{
            let res = await apiServer.get('/area/')
            setAreas(res.data.areas)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getAreas()
    },[])

    console.log(areas)
    return (
        <View>
            <SearchBar></SearchBar>
            
        </View>    
    );
}

export default SearchScreen;