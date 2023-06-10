import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Todo from './src/components/Todo';
import Screen1 from './src/Screens/Screen1';
import Screen2 from './src/Screens/Screen2';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name='Todo List' component={Todo} /> */}
        <Stack.Screen name='Screen 1' component={Screen1} />
        <Stack.Screen name='Screen 2' component={Screen2} />
      </Stack.Navigator>
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
