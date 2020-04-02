import React, { useEffect, useState } from 'react'
import Background from '../components/Background'
import Padding from '../components/Padding'
import Card from '../components/Card'
import { View, Picker, Text } from 'react-native'
import MarginHorizontal from '../components/MarginHorizontal'
import TextDefault from '../components/TextDefault'
import Flex from '../components/Flex'
import axios from "axios";
import Margin from '../components/Margin'
import { numbers } from '../helpers/numbers'
import Colors from '../constants/Colors'

export default function GlobalDetail({route,navigation}) {

    const [kasus, setKasus] = useState([])
    const [RegionalData, setRegionalData] = useState({hit:[]})
    const [nations, setNations] = useState([])
    const [nation, setNation] = useState({})

    useEffect(() => {
        
        setKasus(route.params.kasus)
        setNations(route.params.nations)

    }, [])

    const changeRegional = (nation) => {
        axios.get('https://coronavirus-19-api.herokuapp.com/countries/' + nation ,'')
        .then(res => {
          setRegionalData(res.data)
        })
      }

    return (
        <Background bgprimary height='100%'>
            <Background     
                primary absolute 
                height={170} width={'100%'}
                top={0} z={0}></Background>
            <Margin horizontal={20} top={50}>
                <Margin bottom={10}>
                    <TextDefault xlarge center white>Global</TextDefault> 
                </Margin>
                <Card>
                    <Flex horizontal parent>
                        <Flex alignItems="center">
                            <TextDefault colorWarning>Kasus</TextDefault>
                            <TextDefault bold large>{numbers(kasus.cases)}</TextDefault>
                        </Flex>
                        <Flex alignItems="center">
                            <TextDefault colorDanger>Meninggal</TextDefault>
                            <TextDefault bold large>{numbers(kasus.deaths)}</TextDefault>
                        </Flex>
                        <Flex alignItems="center">
                            <TextDefault colorSuccess>Sembuh</TextDefault>
                            <TextDefault bold large>{numbers(kasus.recovered)}</TextDefault>
                        </Flex>
                    </Flex>
                </Card>
            </Margin>
            <Padding horizontal={20} top={20}>
                <Card>
                    <Margin>
                        <TextDefault xlarge center>Negara</TextDefault> 
                    </Margin>
                    <Margin top={20} bottom={20}>
                        <View style={{backgroundColor: Colors.secondary, borderRadius: 10}}>
                            <MarginHorizontal>
                                <Picker
                                style={[{}]}
                                mode="dropdown"
                                selectedValue={nation}
                                onValueChange={(e) => {
                                    setNation(e)
                                    changeRegional(e)
                                }}> 
                                {
                                    nations ? (
                                    nations.map((n) => {
                                        return (
                                        <Picker.Item label={n.country} value={n.country} key={n.country}/>
                                        )
                                    })
                                    ) : <Picker.Item label='loading' value={n.country} key={n.country}/>
                                }
                                </Picker>
                            </MarginHorizontal>
                        </View>
                    </Margin>
                    <Margin top={10}>
                        <Flex horizontal parent>
                            <Flex>
                                <TextDefault colorWarning center>Kasus</TextDefault>
                                <TextDefault bold center large>{RegionalData.cases}</TextDefault>
                                <TextDefault bold center>{ RegionalData.todayCases ? '(+' + RegionalData.todayCases + ')' : ''}</TextDefault>
                            </Flex>
                            <Flex>
                                <TextDefault colorDanger center>Meninggal</TextDefault>
                                <TextDefault bold center large>{RegionalData.deaths}</TextDefault>
                                <TextDefault bold center>{ RegionalData.todayDeaths ? '(+' + RegionalData.todayDeaths + ')' : ''}</TextDefault>
                            </Flex>
                            <Flex>
                                <TextDefault colorSuccess center>Sembuh</TextDefault>
                                <TextDefault bold center large>{RegionalData.recovered}</TextDefault>
                                <TextDefault bold center>{RegionalData.todayDeathsd}</TextDefault>
                            </Flex>
                        </Flex>
                    </Margin>
                </Card>
            </Padding>
        </Background>
    )
}

