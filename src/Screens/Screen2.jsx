import { View, Text } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'

const Screen2 = ({ navigation }) => {
    const handleNavigateScreen1 = () => {
        navigation.navigate("Screen 1")
    }

    return (
        <View>
            <Text>Screen2</Text>
            <Pressable onPress={handleNavigateScreen1}>
                <Text>Navigate to Screen 1</Text>
            </Pressable>
        </View>
    )
}

export default Screen2