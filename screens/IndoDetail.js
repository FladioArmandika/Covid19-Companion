import React, { useState, useEffect } from 'react'
import TextDefault from '../components/TextDefault'
import { View } from 'react-native'
import axios from 'axios';
import Flex from '../components/Flex';
import MarginTop from '../components/MarginVertical';
import MarginVertical from '../components/MarginVertical';
import Margin from '../components/Margin';
import Padding from '../components/Padding';

export default function IndoDetail() {

    const [kasus, setKasus] = useState([])
    const [kasusProvinsi, setKasusProvinsi] = useState([])

    useEffect(() => {

        axios.get('https://indonesia-covid-19.mathdro.id/api/provinsi','')
            .then(res => {
                setKasusProvinsi(res.data)
            })
            .catch(err => {
                console.error(err); 
            })

        axios.get('https://indonesia-covid-19.mathdro.id/api/','')
            .then(res => {
              setKasus(res.data)
            })
            .catch(err => {
              console.error(err); 
            })
    }, [])

    return (
        <View>
            <View></View>
            <View>
                <Padding horizontal={20} vertical={50}>
                    <Flex alignItems='center'>
                        <TextDefault>Kasus</TextDefault>
                        <TextDefault>{kasus.jumlahKasus}</TextDefault>
                    </Flex>
                </Padding>
            </View>
            
        </View>
    )
}


