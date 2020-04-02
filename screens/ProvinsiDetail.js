import React, { useState, useEffect } from 'react'
import { View, Text, Alert } from 'react-native'
import Background from '../components/Background'
import TextDefault from '../components/TextDefault'
import axios from "axios";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Padding from '../components/Padding';
import Loader from 'react-native-easy-content-loader';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Flex from '../components/Flex';

export default function ProvinsiDetail({route}) {

    const [kasus, setKasus] = useState()

    useEffect(() => {
        
        // axios.get('https://indonesia-covid-19.mathdro.id/api/kasus','')
        //     .then(res => {
        //         const dataprov = []
        //         res.data.data.map((e) => {
        //             if (e.provinsi == route.params.kodeProvi) {
        //                 dataprov.push(e)
        //             }
        //         })
        //         setKasus(dataprov)
        //     })
        //     .catch(err => {
        //         console.error(err); 
        //     })

        const dataprov = []
        route.params.kasusOrang.map((e) => {
            if (e.provinsi == route.params.provinsi.kodeProvi) {
                dataprov.push(e)
            }
        })
        // Alert.alert(JSON.stringify(dataprov))
        setKasus(dataprov)

    }, [])

    return (
        <Background bgprimary height='100%'>
            <ScrollView>
                <Background     
                    primary absolute 
                    height={170} width={'100%'}
                    top={0} z={0}></Background>
                <View>
                    <Padding horizontal={20} top={50}>
                        <TextDefault xlarge white>{route.params.provinsi.provinsi}</TextDefault>
                    </Padding>
                </View>
                <View>
                    <Padding horizontal={20} top={50}>  
                        {
                            kasus ? 
                            kasus.map((e) => {
                                return (
                                    <Card>
                                        <TouchableOpacity
                                            onPress={() => goToProvinsiDetail(e)}>
                                            <Flex horizontal parent spacebetween>
                                                <Flex>
                                                    <TextDefault large>{e.keterangan}</TextDefault>
                                                    <TextDefault>{e.keterangan_status}</TextDefault>
                                                </Flex>
                                                <Flex parent>
                                                    <Flex>
                                                        <TextDefault>{e.hasil_lab}</TextDefault>
                                                        <TextDefault>{e.jenis_kelamin}</TextDefault>
                                                    </Flex>
                                                </Flex>
                                            </Flex>
                                        </TouchableOpacity>
                                    </Card>
                                )
                            })
                            :
                            <Loader
                                primaryColor={Colors.secondaryBackground}
                                secondaryColor={Colors.primaryBackground}
                                animationDuration={500}>
                               <TextDefault>dadw</TextDefault>
                            </Loader>
                        }
                    </Padding>
                </View>
            </ScrollView>
        </Background>
    )
}
