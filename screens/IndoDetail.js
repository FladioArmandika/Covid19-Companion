import React, { useState, useEffect } from 'react'
import TextDefault from '../components/TextDefault'
import { View, Text } from 'react-native'
import axios from 'axios';
import Flex from '../components/Flex';
import MarginTop from '../components/MarginVertical';
import MarginVertical from '../components/MarginVertical';
import Margin from '../components/Margin';
import Padding from '../components/Padding';
import Card from '../components/Card';
import { ScrollView } from 'react-native-gesture-handler';
import Background from '../components/Background';

export default function IndoDetail() {

    const [kasus, setKasus] = useState([])
    const [kasusProvinsi, setKasusProvinsi] = useState([])

    useEffect(() => {

        axios.get('https://indonesia-covid-19.mathdro.id/api/provinsi','')
            .then(res => {
                setKasusProvinsi(res.data.data)
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
        <Background bgprimary>
            <ScrollView>
                <Background     
                    primary absolute 
                    height={170} width={'100%'}
                    top={0} z={0}></Background>
                <View>
                    <Padding horizontal={20} top={50}>
                        <Flex alignItems='center' parent>
                            <TextDefault medium>Kasus</TextDefault>
                            <TextDefault jumbo>{kasus.jumlahKasus}</TextDefault>
                        </Flex>
                        <Card>
                            <Flex horizontal spacebetween parent>
                                <Flex alignItems='center'>
                                    <TextDefault>Perawatan</TextDefault>
                                    <TextDefault>{kasus.perawatan}</TextDefault>
                                </Flex>
                                <Flex alignItems='center'>
                                    <TextDefault>Meninggal</TextDefault>
                                    <TextDefault>{kasus.meninggal}</TextDefault>
                                </Flex>
                                <Flex alignItems='center'>
                                    <TextDefault>Sembuh</TextDefault>
                                    <TextDefault>{kasus.sembuh}</TextDefault>
                                </Flex>
                            </Flex>
                        </Card>
                    </Padding>
                    <Padding horizontal={20} top={20}>
                        <TextDefault xlarge>Provinsi</TextDefault>
                        {
                            kasusProvinsi.map((e) => {
                                return (
                                    <Card>
                                        <Flex horizontal parent spacebetween>
                                            <Flex>
                                                <TextDefault>{e.provinsi}</TextDefault>
                                                <TextDefault>{e.kasusPosi}</TextDefault>
                                            </Flex>
                                            <Flex parent>
                                                <Flex>
                                                    <TextDefault>{e.kasusSemb}</TextDefault>
                                                    <TextDefault>{e.kasusMeni}</TextDefault>
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                        
                                    </Card>
                                )
                            })
                        }
                    </Padding>
                </View>
                
            </ScrollView>
        </Background>
        
    )
}


