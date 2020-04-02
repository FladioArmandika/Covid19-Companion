import React, { useEffect, useState } from 'react'
import Background from '../components/Background'
import Padding from '../components/Padding'
import Card from '../components/Card'
import { View, Picker, Text } from 'react-native'
import MarginHorizontal from '../components/MarginHorizontal'
import TextDefault from '../components/TextDefault'
import Flex from '../components/Flex'
import axios from "axios";

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
            <Padding horizontal={20} top={50}>
                <Card>
                    <View>
                        <MarginHorizontal>
                            <Picker
                            style={[]}
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
                    <View style={{height: 100, marginTop: 10}}>
                        <Flex horizontal>
                            <Flex>
                                <TextDefault colorWarning>Cases</TextDefault>
                                <TextDefault bold>{RegionalData.cases}</TextDefault>
                                <TextDefault bold>{ RegionalData.todayCases ? '(+' + RegionalData.todayCases + ')' : ''}</TextDefault>
                            </Flex>
                            <Flex>
                                <TextDefault colorDanger>Death</TextDefault>
                                <TextDefault bold>{RegionalData.deaths}</TextDefault>
                                <TextDefault bold>{ RegionalData.todayDeaths ? '(+' + RegionalData.todayDeaths + ')' : ''}</TextDefault>
                            </Flex>
                            <Flex>
                                <TextDefault colorSuccess>Recovered</TextDefault>
                                <TextDefault bold>{RegionalData.recovered}</TextDefault>
                                <TextDefault bold>{RegionalData.todayDeathsd}</TextDefault>
                            </Flex>
                        </Flex>
                    </View>
                </Card>
            </Padding>
        </Background>
    )
}

