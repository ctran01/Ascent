import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React, { useEffect } from "react";
import { Image } from "react-native";
import CreateAreaScreen from "./app/screens/crudArea/CreateAreaScreen";
import AreaDetailScreen from "./app/screens/crudArea/AreaDetailScreen";
import EditAreaScreen from "./app/screens/crudArea/EditAreaScreen";
import CreateRouteScreen from "./app/screens/crudRoute/CreateRouteScreen";
import EditRouteScreen from "./app/screens/crudRoute/EditRouteScreen";
import RouteDetailScreen from "./app/screens/crudRoute/RouteDetailScreen";
import HomeScreen from "./app/screens/HomeScreen";
import SigninScreen from "./app/screens/SigninScreen";
import SearchScreen from "./app/screens/SearchScreen";
import SignupScreen from "./app/screens/SignupScreen";
import LoadingScreen from "./app/screens/LoadingScreen";
import MapScreen from "./app/screens/MapScreen";
import AccountScreen from "./app/screens/AccountScreen";
import FollowedScreen from "./app/screens/FollowedScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Provider as UserProvider } from "./app/context/UserContext";
import { setNavigator } from "./app/setNavigator";
import { Provider as AreaProvider } from "./app/context/AreaContext";
import YourRouteScreen from "./app/screens/YourRouteScreen";
import { Provider as RouteProvider } from "./app/context/RouteContext";
import { Feather } from "@expo/vector-icons";
import LandingScreen from "./app/screens/LandingScreen";

const homeFlow = createStackNavigator({
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
  YourRoute: YourRouteScreen,
});

homeFlow.navigationOptions = {
  title: "Home",
  tabBarIcon: <Feather name="home" size={24} color="grey" />,
};

const navigator = createSwitchNavigator({
  Loading: LoadingScreen,
  loginFlow: createStackNavigator({
    Landing: LandingScreen,
    Signin: SigninScreen,
    Signup: SignupScreen,
  }),
  mainFlow: createBottomTabNavigator(
    {
      homeFlow: homeFlow,
      Account: AccountScreen,
    },
    {
      tabBarOptions: {
        style: {
          backgroundColor: "white",
          height: 45,
        },
      },
    }
  ),
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <AreaProvider>
      <RouteProvider>
        <UserProvider>
          <App
            ref={(navigator) => {
              setNavigator(navigator);
            }}
          />
        </UserProvider>
      </RouteProvider>
    </AreaProvider>
  );
};
