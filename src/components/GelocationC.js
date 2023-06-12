import { View, Text, PermissionsAndroid, Pressable, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const GelocationC = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }
    //     const requestLocationPermission = async () => {
    //         console.log('123')
    //         try {
    //             const granted = await PermissionsAndroid.request(
    //                 PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    //                 {
    //                     title: 'Location Permission',
    //                     message: 'This app needs access to your location.',
    //                     buttonPositive: 'OK',
    //                 },
    //             );
    //             if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //                 console.log('Location permission granted');
    //             } else {
    //                 console.log('Location permission denied');
    //             }
    //         } catch (err) {
    //             console.warn(err);
    //         }
    //     }

    return (
        <View style={styles.container}>
            {/* <Pressable onPress={requestLocationPermission}>
                <Text>
                    Request GPS Location
                </Text>
            </Pressable> */}
            {/* <Text>{text}</Text> */}
            {
                location ?
                    (
                        <MapView
                            style={styles.map}
                            initialRegion={{
                                latitude: location.coords.latitude,
                                longitude: location.coords.longitude,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        >
                            <Marker
                                coordinate={{
                                    latitude: location.coords.latitude,
                                    longitude: location.coords.longitude,
                                }}
                                title="Current Location"
                            />
                        </MapView>
                    )
                    :
                    <Text>Waiting Map</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default GelocationC