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
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Loader from 'react-native-easy-content-loader';
import Background from '../components/Background';
import Colors from '../constants/Colors';
import { numbers } from '../helpers/numbers';

export default function IndoDetail({navigation}) {

    const [kasus, setKasus] = useState([])
    const [kasusProvinsi, setKasusProvinsi] = useState(null)

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

    const goToProvinsiDetail = (provinsi) => {
        navigation.navigate('provinsidetail', provinsi)
    }

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
                            <TextDefault medium white>Kasus</TextDefault>
                            <TextDefault jumbo white>{numbers(kasus.jumlahKasus)}</TextDefault>
                        </Flex>
                        <Card>
                            <Flex horizontal spacebetween parent>
                                <Flex alignItems='center'>
                                    <TextDefault>Perawatan</TextDefault>
                                    <TextDefault>{numbers(kasus.perawatan)}</TextDefault>
                                </Flex>
                                <Flex alignItems='center'>
                                    <TextDefault>Meninggal</TextDefault>
                                    <TextDefault>{numbers(kasus.meninggal)}</TextDefault>
                                </Flex>
                                <Flex alignItems='center'>
                                    <TextDefault>Sembuh</TextDefault>
                                    <TextDefault>{numbers(kasus.sembuh)}</TextDefault>
                                </Flex>
                            </Flex>
                        </Card>
                    </Padding>
                    <Padding horizontal={20} top={20}>
                        <TextDefault xlarge>Provinsi</TextDefault>
                        {
                            kasusProvinsi ?
                            kasusProvinsi.map((e) => {
                                return (
                                    <Card>
                                        <TouchableOpacity
                                            onPress={() => goToProvinsiDetail(e)}>
                                            <Flex horizontal parent spacebetween>
                                                <Flex>
                                                    <TextDefault large>{e.provinsi}</TextDefault>
                                                    <TextDefault>{e.kasusPosi}</TextDefault>
                                                </Flex>
                                                <Flex parent>
                                                    <Flex>
                                                        <TextDefault>{e.kasusSemb}</TextDefault>
                                                        <TextDefault>{e.kasusMeni}</TextDefault>
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


