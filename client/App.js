import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import SearchScreen from './app/screens/SearchScreen'
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    LandingPage: LandingPageScreen,
    Search: SearchScreen
  },
  {
    initialRouteName: "LandingPage",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Test</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
