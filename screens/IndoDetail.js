import React, { useState, useEffect } from 'react'
import TextDefault from '../components/TextDefault'
import { View, Text, Alert } from 'react-native'
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
    const [kasusHarian, setKasusHarian] = useState(null)
    const [kasusOrang, setKasusOrang] = useState(null)

    useEffect(() => {
        // GET DATA BERDASARKAN PROVINSI
        axios.get('https://indonesia-covid-19.mathdro.id/api/provinsi','')
            .then(res => {
                setKasusProvinsi(res.data.data)
            })
            .catch(err => {
                console.error(err); 
            })

        // GET DATA INDONESIA
        axios.get('https://indonesia-covid-19.mathdro.id/api/','')
            .then(res => {
              setKasus(res.data)
            })
            .catch(err => {
              console.error(err); 
            })
        
        // GET DATA HARIAN
        axios.get('https://indonesia-covid-19.mathdro.id/api/harian','')
            .then(res => {
                const lastData = res.data.data.reverse()[0]
                setKasusHarian(lastData)
            })
            .catch(err => {
              console.error(err); 
            })

        // GET DATA KASUS
        axios.get('https://indonesia-covid-19.mathdro.id/api/kasus','')
            .then(res => {
                setKasusOrang(res.data.data)
            })
            .catch(err => {
                console.error(err); 
            })
    }, [])

    const goToProvinsiDetail = (provinsi) => {
        const kasusProv = {
            provinsi: provinsi,
            kasusOrang: kasusOrang
        }
        navigation.navigate('provinsidetail', kasusProv)
    }

    return (
        <Background bgprimary height='100%'>
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
                                    <TextDefault secondary>Perawatan</TextDefault>
                                    <TextDefault bold large>{numbers(kasus.perawatan)}</TextDefault>
                                    { kasusHarian && kasusHarian.jumlahKasusBaruperHari ? 
                                      <TextDefault>(+{kasusHarian.jumlahKasusBaruperHari})</TextDefault> : <TextDefault></TextDefault>
                                    }
                                </Flex>
                                <Flex alignItems='center'>
                                    <TextDefault secondary>Meninggal</TextDefault>
                                    <TextDefault bold large>{numbers(kasus.meninggal)}</TextDefault>
                                    { kasusHarian && kasusHarian.jumlahKasusMeninggalperHari ? 
                                      <TextDefault>(+{kasusHarian.jumlahKasusMeninggalperHari})</TextDefault> : <TextDefault></TextDefault>
                                    }
                                </Flex>
                                <Flex alignItems='center'>
                                    <TextDefault secondary>Sembuh</TextDefault>
                                    <TextDefault bold large>{numbers(kasus.sembuh)}</TextDefault>
                                    { kasusHarian && kasusHarian.jumlahKasusSembuhperHari ? 
                                      <TextDefault>(+{kasusHarian.jumlahKasusSembuhperHari})</TextDefault> : <TextDefault></TextDefault>
                                    }
                                </Flex>
                            </Flex>
                            <Margin top={20}>
                                <TextDefault small center secondary>
                                    {
                                        kasusHarian ?  
                                        'terakhir update : ' +
                                        new Date(kasusHarian.tanggal).getDate() + '-' + 
                                        new Date(kasusHarian.tanggal).getMonth() + '-' + 
                                        new Date(kasusHarian.tanggal).getFullYear()
                                        : ''
                                    }
                                </TextDefault>
                            </Margin>
                        </Card>
                    </Padding>
                    <Padding horizontal={20} top={20}>
                        <TextDefault xlarge>Provinsi</TextDefault>
                        {
                            kasusProvinsi && kasusOrang?
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


