import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import apiServer from '../api/apiServer'
import SearchResultsList from '../components/SearchResultsList';


const SearchScreen = () => {
    const [searchTerm,  setSearchTerm] = useState('')
    const [areaSearchResults, setAreaSearchResults] = useState([])
    const [routeSearchResults, setRouteSearchResults] = useState([])
    const [error,setError] = useState('')

    const onTermSubmit = async(search)=>{
        
        try{
            let areaRes = await apiServer.get(`/search/areas/${search}`)
            setAreaSearchResults(areaRes.data.areas)
        }catch(err){
            console.log(err)
        }
        try{
            let routeRes = await apiServer.get(`search/routes/${search}`)
            setRouteSearchResults(routeRes.data.routes)
        }catch(err){
            console.log(err)
        }
        
    }

    // }
    // const [areas, setAreas] = useState([])
    // const [routes,setRoutes] = useState([])

    // const getAreas = async ()=>{
    //     try{
    //         let res = await apiServer.get('/area/')
    //         setAreas(res.data.areas)
    //     }catch(err){
    //         console.log(err)
    //     }
    // }

    // useEffect(()=>{
    //     getAreas()
    // },[])

    // console.log(areas)
    
    return (
        <View>
            <SearchBar
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            onTermSubmit={()=>onTermSubmit(searchTerm)}
            ></SearchBar>
                <Text>Area</Text>
                <SearchResultsList results={areaSearchResults}/>
                <Text>Routes</Text>
                <SearchResultsList results={routeSearchResults}/>
            
        </View>    
    );
}

export default SearchScreen;