import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TextInput, Touchable, View } from 'react-native';
import Hello from './src/components/Hello';

export default function App() {
  return (
    <View className="">
      <Hello />
      <Text onPress={() => { Alert.alert("Hello") }}>Press</Text>
      <TextInput className="border-black border-[1px]" />
    </View>
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
