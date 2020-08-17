import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import SearchScreen from './app/screens/SearchScreen'
import AreaDetailScreen from './app/screens/AreaDetailScreen'
import HomeScreen from './app/screens/HomeScreen'
import SigninScreen from './app/screens/SigninScreen'
import RouteDetailScreen from './app/screens/RouteDetailScreen';
import SignupScreen from './app/screens/SignupScreen';
import LoadingScreen from './app/screens/LoadingScreen';
import MapScreen from './app/screens/MapScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs'




const navigator = createStackNavigator(
  {
    Loading: LoadingScreen,
    loginFlow: createStackNavigator({
      Signin: SigninScreen,
      Signup: SignupScreen
    }),
    mainFlow: createBottomTabNavigator({
      Home: HomeScreen
    })
    
  {
    initialRouteName: "LandingPage",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);

