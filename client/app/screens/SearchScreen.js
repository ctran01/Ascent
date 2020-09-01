import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView, FlatList} from 'react-native';
import {Text} from 'react-native-elements'
// import SearchBar from '../components/SearchBar';
import apiServer from '../api/apiServer'
import SearchResultsList from '../components/SearchResultsList';
import {SearchBar} from 'react-native-elements'
import { set } from 'react-native-reanimated';


const SearchScreen = () => {
    // const [searchTerm,  setSearchTerm] = useState('')
    const [areaSearchResults, setAreaSearchResults] = useState([])
    const [routeSearchResults, setRouteSearchResults] = useState([])
    const [value,setValue] = useState('')
    const [cachedArea, setCachedArea]= useState([])
    const [cachedRoute, setCachedRoute]= useState([])
    
    
    // const onTermSubmit = async(search)=>{
    //     console.log(search)
    //     try{
    //         let areaRes = await apiServer.get(`/search/areas/${search}`)
    //         setAreaSearchResults(areaRes.data.areas)
    //     }catch(err){
    //         console.log(err)
    //     }
    //     try{
    //         let routeRes = await apiServer.get(`search/routes/${search}`)
    //         setRouteSearchResults(routeRes.data.routes)
    //     }catch(err){
    //         console.log(err)
    //     }
        
    // }
    
    const grabData = async()=>{
        try{
            let areaRes = await apiServer.get(`/area/`)
            // setAreaSearchResults(areaRes.data.areas)
            setCachedArea(areaRes.data.areas)
        }catch(err){
            console.log(err)
        }
        try{
            let routeRes = await apiServer.get(`/route/`)
            // setRouteSearchResults(routeRes.data.routes)
            setCachedRoute(routeRes.data.routes)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        grabData();
    },[])

    const searchFilter = (search) =>{
        setValue(search)
        const searchedArea = cachedArea.filter(item =>{
            const itemData = `${item.name.toUpperCase()}`;
            const searchData = search.toUpperCase();
             return itemData.indexOf(searchData)> -1;
        })
        setAreaSearchResults(searchedArea)
        const searchedRoute = cachedRoute.filter(item =>{
            const itemData = `${item.name.toUpperCase()}`;
            const searchData = search.toUpperCase();
             return itemData.indexOf(searchData)> -1;
        })
        setRouteSearchResults(searchedRoute)
    }
    
    
    return (
        <View>
            {/* <SearchBar
            // setSearchTerm={setSearchTerm}
            // searchTerm={searchTerm}
            // onTermSubmit={()=>onTermSubmit(searchTerm)}
            ></SearchBar> */}
            <SearchBar
            value={value}
            onChangeText={text => searchFilter(text)}
            lightTheme
            placeholder={"Search"}
            placeholderTextColor={"black"}
            inputStyle={{color:"black"}}
            searchIcon={{color:"black"}}
            autoCapitalize="none"
            autoCorrect={false}

            />
                <Text h3 style={{backgroundColor:"#bdc6cf"}}>Area</Text>
                    <FlatList
                        data={areaSearchResults}
                        keyExtractor={(result)=> result.id.toString()}
                        renderItem={({item})=>{
                            return(

                                <Text>{item.name}</Text>
                            )
                        }}
                />
                <Text h3 style={{backgroundColor:"#bdc6cf"}}>Route</Text>
                    <FlatList
                        data={routeSearchResults}
                        keyExtractor={(result)=> result.id.toString()}
                        renderItem={({item})=>{
                            return(

                                <Text>{item.name}</Text>
                            )
                        }}
                />



                {/* <SearchResultsList results={areaSearchResults}/>
                <Text h3 style={{backgroundColor:"#bdc6cf"}}>Routes</Text>
                <SearchResultsList results={routeSearchResults}/> */}
            
        </View>    
    );
}
SearchScreen.navigationOptions = ({navigation}) => {
  
    return {
      title: "Search" ,
      headerTitleStyle: {color: 'white'},
      headerBackTitleVisible: false,
      headerStyle: {backgroundColor: 'black', }
    };
  };
export default SearchScreen;