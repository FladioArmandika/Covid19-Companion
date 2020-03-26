

import React, { useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { StyleSheet, Dimensions, View } from 'react-native'

export default function MapScreen() {

    const [region, setRegion] = useState({
      latitude:-6.9175,
      longitude:107.6191,
      latitudeDelta: 0.2,
      longitudeDelta: 0.2,
    })

    const markers = [
        {
            latitude:-6.9175,
            longitude:107.6191,
            title: 'ODP',
            description: '1234 Foo Drive'
        },
        {
            latitude:-6.9175,
            longitude:107.6139,
            title: 'PDP',
            description: '1234 Foo Drive'
        }
    ]

    return (
        <View>
            <MapView 
                region={region}
                annotations={markers}
                style={styles.mapStyle}>
                    {
                        markers.map((location) => {
                            return (
                                <Marker coordinate = {{latitude: location.latitude,longitude: location.longitude}}
                                    pinColor = {"purple"} // any color
                                    title={"title"}
                                    description={"description"}/>
                            )
                        })
                    }
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})