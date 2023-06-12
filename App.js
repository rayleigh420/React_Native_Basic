import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './src/Screens/Screen1';
import Screen2 from './src/Screens/Screen2';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccelerometerC from './src/Components/AccelerometerC';
import Camera from './src/Components/Camera';
import GelocationC from './src/Components/GelocationC';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Accelerometer' component={AccelerometerC} />
        <Tab.Screen name='Camera' component={Camera} />
        <Tab.Screen name='Geolocation' component={GelocationC} />
        <Tab.Screen name='Screen 2' component={Screen2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
