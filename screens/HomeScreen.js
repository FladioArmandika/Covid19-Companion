import React, {useState,useEffect} from 'react';
import { Image, Platform, StyleSheet, TouchableOpacity, View , Dimensions, Alert, Picker} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import axios from 'axios'

import Colors from '../constants/Colors'
import { MonoText } from '../components/StyledText';
import MarginHorizontal from '../components/MarginHorizontal';
import Text from '../components/TextDefault';
import Flex from '../components/Flex';
import TextDefault from '../components/TextDefault';
import Card from '../components/Card';
import ButtonApp from '../components/ButtonApp.js';
import { numbers } from '../helpers/numbers';
import Background from '../components/Background';
import Margin from '../components/Margin';
import ButtonDefault from '../components/ButtonDefault';


export default function HomeScreen({navigation}) {

  const [GlobalData, setGlobalData] = useState({hit:[]})
  const [RegionalData, setRegionalData] = useState({hit:[]})
  const [nations, setNations] = useState([])
  

  const [indoData, setIndoData] = useState([])

  useEffect(() => {
    axios.get('https://coronavirus-19-api.herokuapp.com/all','')
      .then(res => {
        setGlobalData(res.data)
      })
      .catch(err => {console.error(err)})

    axios.get('https://coronavirus-19-api.herokuapp.com/countries','')
      .then(res => {
        var sortedData = res.data.sort((a,b) => {
          if(a.country < b.country) {return -1}
          if(a.country > b.country) {return 1}
          return 0
        })
        setNations(sortedData)
      })
    .catch(err => {console.error(err)})

    axios.get('https://indonesia-covid-19.mathdro.id/api/','')
      .then(res => {
        setIndoData(res.data)
      })
      .catch(err => {
        console.error(err); 
      })
  },[])
 
  const changeRegional = (nation) => {
    axios.get('https://coronavirus-19-api.herokuapp.com/countries/' + nation ,'')
    .then(res => {
      setRegionalData(res.data)
    })
  }

  const goToGlobalDetail = () => {
    const data = {
      nations: nations,
      kasus: GlobalData,
    }
    navigation.navigate('globaldetail', data)
  }

  return (
    <Background bgprimary height='100%'>
      <View style={{marginTop:30}}>
        <MarginHorizontal>
          <Card>
            <Margin bottom={20}>
              <TextDefault xlarge center>Indonesia</TextDefault> 
            </Margin>
            <Flex horizontal parent>
              <Flex alignItems='center'>
                <TextDefault colorWarning>Kasus</TextDefault>
                <TextDefault bold large>{numbers(indoData.jumlahKasus)}</TextDefault>
              </Flex>
              <Flex alignItems='center'>
                <TextDefault colorDanger>Meninggal</TextDefault>
                <TextDefault bold large>{numbers(indoData.meninggal)}</TextDefault>
              </Flex>
              <Flex alignItems='center'>
                <TextDefault colorSuccess>Sembuh</TextDefault>
                <TextDefault bold large>{numbers(indoData.sembuh)}</TextDefault>
              </Flex>
            </Flex>
            <ButtonApp primary onPress='indodetail' nav={navigation} marginTop={20}>Detail</ButtonApp>
          </Card>
          <Margin top={20}>
            <Card>
              <Margin bottom={20}>
                <TextDefault xlarge center>Global</TextDefault>
              </Margin>
              <Flex horizontal parent>
                <Flex alignItems="center">
                  <TextDefault colorWarning>Kasus</TextDefault>
                  <TextDefault bold large>{numbers(GlobalData.cases)}</TextDefault>
                </Flex>
                <Flex alignItems="center">
                  <TextDefault colorDanger>Meninggal</TextDefault>
                  <TextDefault bold large>{numbers(GlobalData.deaths)}</TextDefault>
                </Flex>
                <Flex alignItems="center">
                  <TextDefault colorSuccess>Sembuh</TextDefault>
                  <TextDefault bold large>{numbers(GlobalData.recovered)}</TextDefault>
                </Flex>
              </Flex>
              <ButtonDefault primary onPress={goToGlobalDetail} marginTop={20}>Detail</ButtonDefault>
            </Card>
          </Margin>
          {/* <TextDefault>Regional</TextDefault> */}
          
          
        </MarginHorizontal>
      </View> 
    </Background>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  primaryBackground: {
    backgroundColor: Colors.primaryBackground
  },
  colorRed: {
    color:'#d63031'
  },
  colorGreen: {
    color:'#00b894'
  },
  colorYellow: {
    color:'#fdcb6e'
  },
  input: {
    backgroundColor: '#dfe6e9',
    borderRadius: 10
  },
  textBold: {
    fontWeight: "bold",
    
  },
  flexHorizontal: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between"
  },
  card: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
    paddingVertical: 25,
    borderRadius: 10,
    margin:5
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
