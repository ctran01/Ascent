import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import React from 'react'
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
import { createBottomTabNavigator } from 'react-navigation-tabs'
import {Provider as UserProvider} from './app/context/UserContext'
import {setNavigator} from './app/setNavigator'




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
        AreaDetail: AreaDetailScreen,
        RouteDetail: RouteDetailScreen,
      }),
      Account: AccountScreen
    })
  }, 
);

const App = createAppContainer(navigator);

export default () =>{
  return(
    <UserProvider>
      <App ref={(navigator)=> {setNavigator(navigator)}}/>
    </UserProvider>
  )
}
