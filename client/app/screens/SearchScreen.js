import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet, ScrollView, FlatList, SectionList, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import {Text} from 'react-native-elements'
// import SearchBar from '../components/SearchBar';
import apiServer from '../api/apiServer'
import SearchResultsList from '../components/SearchResultsList';
import {SearchBar} from 'react-native-elements'
import { set } from 'react-native-reanimated';
import {Context as routeContext} from '../context/RouteContext'
import {Context as areaContext} from '../context/AreaContext'
import AreaSearchResultsList from '../components/AreaSearchResultsList'
import RouteSearchResultsList from '../components/RouteSearchResultsList'

const SearchScreen = ({navigation}) => {
    // const [searchTerm,  setSearchTerm] = useState('')
    const {setSearchedRoutes} = useContext(routeContext)
    const {setSearchedAreas} = useContext(areaContext)
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
            setSearchedAreas(areaRes.data.areas)
        }catch(err){
            console.log(err)
        }
        try{
            let routeRes = await apiServer.get(`/route/`)
            // setRouteSearchResults(routeRes.data.routes)
            setCachedRoute(routeRes.data.routes)
            setSearchedRoutes(routeRes.data.routes)
            
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
        <SafeAreaView showsVerticalScrollIndicator={false}>
            <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
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
            {/* "#bdc6cf" */}
                <Text h3 style={{backgroundColor:"black", color:"white"}}>Area</Text>
                {areaSearchResults.length === 0 ? <Text style={{color:"red"}}>No items found</Text> : null}
                    <View>
                    <FlatList
                        data={areaSearchResults}
                        keyExtractor={(result)=> result.id.toString()}
                        renderItem={({item})=>{
                            return(
                                <TouchableOpacity style={{borderBottomWidth:1, backgroundColor:"#bdc6cf"}} onPress={()=> navigation.navigate('AreaDetail',{id:item.id, title: item.name})}>
                                    <View style={{  height:60, flexDirection:"row", }}>
                                        {item.image_url ? <Image style={styles.image} source={{uri: item.image_url}}/> : <Image style={styles.image} source={require('../images/placeholderImage.jpeg')}/>}
                                        <View >
                                            <View style={{paddingTop:5}}>
                                                <Text style={{ fontSize:16,fontWeight:"bold",}}> 
                                                    
                                                    {item.name}
                                                </Text>
                                            </View>
                                            <View>
                                                <Text style={{fontSize:12}}>
                                                    Created by: {item.User.username}
                                                </Text>
                                                <Text>
                                                {item.Routes.length} Routes
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ paddingLeft: 4, paddingTop:10}}>
                                            
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                    </View>
                <Text h3 style={{backgroundColor:"black", color:"white"}}>Route</Text>
                {routeSearchResults.length === 0 ? <Text style={{color:"red"}}>No items found</Text> : null}
                <View>
                    <FlatList
                        data={routeSearchResults}
                        keyExtractor={(result)=> result.id.toString()}
                        renderItem={({item})=>{
                            return(
                                <TouchableOpacity style={{borderBottomWidth:1, backgroundColor:"#bdc6cf"}} onPress={()=> navigation.navigate('RouteDetail', {id:item.id, title:item.name})}>
                                    <View style={{  height:60, flexDirection:"row", justifyContent:"space-between"}}>
                                        {item.image_url ? <Image style={styles.image} source={{uri: item.image_url}}/> : <Image style={styles.image} source={require('../images/placeholderImage.jpeg')}/>}
                                        <View >
                                            <View style={{ paddingTop:5}}>
                                                <Text style={{ fontSize:16,fontWeight:"bold", marginRight:150, width:125}}>
                                                    {item.name}
                                                </Text>
                                                <Text style={{fontSize:10}}>
                                                    {item.Area.name}
                                                </Text>
                                            </View>
                                            <View style={{}} >
                                                <Text style={{fontSize:12,marginTop:7}}>
                                                    Created by: {item.User.username}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ alignItems:"flex-end", width:55,}}>
                                            <Text >
                                                {item.type}
                                            </Text>
                                            <Text style={{marginTop:5}}>
                                                {item.grade}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                    </View>


                
                {/* <SearchResultsList results={areaSearchResults}/>
                <Text h3 style={{backgroundColor:"#bdc6cf"}}>Routes</Text>
                <SearchResultsList results={routeSearchResults}/> */}
            {/* <SectionList
                sections={[
                    {
                        title: 'Areas',
                        data: areaSearchResults,
                    },
                    {
                        title: 'Routes',
                        data: routeSearchResults
                    }
                ]}
                renderItem={({item}) =>{
                    return(
                        
                        <Text>{item.name}</Text>
                    )
                }}
                renderSectionHeader={({section}) =>{
                    return(
                    

                    <Text h3 style={{backgroundColor:"#bdc6cf", marginBottom:10}}>{section.title}</Text>
                    
                    )
                }}
                keyExtractor={(item)=>item.id.toString()}
            /> */}
           </ScrollView>
        </SafeAreaView>    
    );
}

const styles = StyleSheet.create({
    image:{
        width:80,
        height:60
    }
})
SearchScreen.navigationOptions = ({navigation}) => {
  
    return {
      title: "Search" ,
      headerTitleStyle: {color: 'white'},
      headerBackTitleVisible: false,
      headerStyle: {backgroundColor: 'black', }
    };
  };
export default SearchScreen;