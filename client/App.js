import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import React,{useEffect} from 'react'
import SearchScreen from './app/screens/SearchScreen'
import AreaDetailScreen from './app/screens/AreaDetailScreen'
import HomeScreen from './app/screens/HomeScreen'
import SigninScreen from './app/screens/SigninScreen'
import RouteDetailScreen from './app/screens/RouteDetailScreen';
import SignupScreen from './app/screens/SignupScreen';
import LoadingScreen from './app/screens/LoadingScreen';
import MapScreen from './app/screens/MapScreen';
import AccountScreen from './app/screens/AccountScreen';
import FollowedScreen from './app/screens/FollowedScreen';
import CreateAreaScreen from './app/screens/crudArea/CreateAreaScreen';
import EditAreaScreen from './app/screens/crudArea/EditAreaScreen';
import CreateRouteScreen from './app/screens/crudeRoute/CreateRouteScreen';
import EditRouteScreen from './app/screens/crudeRoute/EditRouteScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import {Provider as UserProvider} from './app/context/UserContext'
import {setNavigator} from './app/setNavigator'
import {Provider as AreaProvider} from './app/context/AreaContext'





const navigator = createSwitchNavigator(
  {
    loginFlow: createStackNavigator({
      Signin: SigninScreen,
      Signup: SignupScreen
    }),
    mainFlow: createBottomTabNavigator({
      homeFlow: createStackNavigator({
        Home: HomeScreen,
        Search: SearchScreen,
        Map: MapScreen,
        Followed: FollowedScreen,
        CreateArea: CreateAreaScreen,
        EditArea: EditAreaScreen,
        CreateRoute: CreateRouteScreen,
        EditRoute: EditRouteScreen,
        AreaDetail: AreaDetailScreen,
        RouteDetail: RouteDetailScreen,
      }),
      Account: AccountScreen
    },{
      tabBarOptions:{
        style:{
          backgroundColor: 'rgba(0, 0, 0, 0)',
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: 50
        }
      }
    })
  }, 
);

const App = createAppContainer(navigator);

export default () => {

  return(
  <AreaProvider>
    <UserProvider>
      <App ref={(navigator)=> {setNavigator(navigator)}}/>
    </UserProvider>
  </AreaProvider>
  )
}
