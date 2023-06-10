import { View, Text } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'

const Screen1 = ({ navigation }) => {
    const handleNaviageScreen2 = () => {
        navigation.navigate('Screen 2')
    }

    return (
        <View>
            <Text>Screen1</Text>
            <Pressable onPress={handleNaviageScreen2}>
                <Text>Naviagte to screen 2</Text>
            </Pressable>
        </View>
    )
}

export default Screen1