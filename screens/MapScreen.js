

import React, { useState, useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { StyleSheet, Dimensions, View, Alert } from 'react-native'
import axios from "axios";
import * as Location from "expo-location";
import * as Permissions from 'expo-permissions'
import Background from '../components/Background';
import TextDefault from '../components/TextDefault';

export default function MapScreen({navigator}) {

    const [region, setRegion] = useState({
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0,
      longitudeDelta: 0,
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
        
        getCurrentLocation()
        
        axios.get('https://indonesia-covid-19.mathdro.id/api/kasus','')
            .then(res => {
                setKasus(res.data.data)
            })
            .catch(err => {
                console.error(err); 
            })

    }, [])

    const getCurrentLocation = async() => {
        Permissions.askAsync(Permissions.LOCATION)
            .then(status => {
                if(status.status == 'granted') {
                    Location.getCurrentPositionAsync({})
                        .then(location => {
                            // Alert.alert(JSON.stringify(location))
                            const currentLocation = {
                                latitude: location.coords.latitude,
                                longitude: location.coords.longitude,
                                latitudeDelta: 0.005,
                                longitudeDelta: 0.005,
                            }
                            setRegion(currentLocation)
                        })
                }
            })
    }

    return (
        <Background>
            {/* <Background absolute width={200} height={300} top={0} left={0} z={5}>
                <TextDefault>
                {
                    region ? JSON.stringify(region) : 'dawdwa'
                }
                </TextDefault>
            </Background> */}
            <MapView 
                region={region}
                annotations={markers}
                style={styles.mapStyle}>
                    <Marker 
                        coordinate = {region} 
                        pinColor = {"purple"} // any color
                        title={"You"}
                        description={"description"}/>
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
                        <Marker 
                            coordinate = {{
                                latitude: Number(location.lat),
                                longitude: Number(location.long)}}
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