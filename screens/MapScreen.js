

import React, { useState, useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { StyleSheet, Dimensions, View } from 'react-native'
import axios from "axios";
import Background from '../components/Background';

export default function MapScreen() {

    const [region, setRegion] = useState({
      latitude:-6.9175,
      longitude:107.6191,
      latitudeDelta: 0.2,
      longitudeDelta: 0.2,
    })

    const [kasus, setKasus] = useState([])

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


    useEffect(() => {
        axios.get('https://indonesia-covid-19.mathdro.id/api/kasus','')
            .then(res => {
                setKasus(res.data.data)
            })
            .catch(err => {
                console.error(err); 
            })
    }, [])

    return (
        <Background>
            <MapView 
                region={region}
                annotations={markers}
                style={styles.mapStyle}>
                    {
                        kasus ? 
                        kasus.map((location) => {
                            return (
                                <Marker 
                                    coordinate = {{
                                        latitude: Number(location.lat),
                                        longitude: Number(location.long)}}
                                    pinColor = {"purple"} // any color
                                    title={"title"}
                                    description={"description"}/>
                            )
                        })
                        :
                        <Marker coordinate = {{latitude: 0,longitude: 0}}
                            pinColor = {"purple"} // any color
                            title={"title"}
                            description={"description"}/>
                    }
            </MapView>
        </Background>
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