import React, {useState,useEffect} from 'react';
import { Image, Platform, StyleSheet, TouchableOpacity, View , Dimensions, Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import axios from 'axios'


import { MonoText } from '../components/StyledText';
import MarginHorizontal from '../components/MarginHorizontal';
import Text from '../components/TextDefault';

export default function HomeScreen() {

  const [Data, setData] = useState({hit:[]})

  useEffect(() => {
    axios.get('https://coronavirus-19-api.herokuapp.com/all','')
    .then(res => {
      setData(res.data)
      // Alert.alert(JSON.stringify(Data))
    })
    .catch(err => {
      console.error(err); 
    })
  },[])
 
  return (
    <View style={{...styles.container,...styles.primaryBackground}}>
      <View style={{marginTop:30}}>
        <MarginHorizontal>
          <View style={{height: 100, marginTop: 10}}>
            <View style={styles.flexHorizontal}>
              <View style={{...styles.card, flex: 1}}>
                <Text style={{...styles.colorYellow}}>Cases</Text>
                <Text style={{...styles.textBold}}>{Data.cases}</Text>
              </View>
              <View style={{...styles.card, flex: 1}}>
                <Text style={{...styles.colorRed}}>Death</Text>
                <Text style={{...styles.textBold}}>{Data.deaths}</Text>
              </View>
              <View style={{...styles.card, flex: 1}}>
                <Text style={{...styles.colorGreen}}>Recovered</Text>
                <Text style={{...styles.textBold}}>{Data.recovered}</Text>
              </View>
            </View>
          </View>
          <View style={{height: 100, marginTop: 10}}>
            <View style={styles.flexHorizontal}>
              <View style={{...styles.card, flex: 1}}>
                <Text style={{...styles.colorYellow}}>Cases</Text>
                <Text style={{...styles.textBold}}>{Data.cases}</Text>
              </View>
              <View style={{...styles.card, flex: 1}}>
                <Text style={{...styles.colorRed}}>Death</Text>
                <Text style={{...styles.textBold}}>{Data.deaths}</Text>
              </View>
              <View style={{...styles.card, flex: 1}}>
                <Text style={{...styles.colorGreen}}>Recovered</Text>
                <Text style={{...styles.textBold}}>{Data.recovered}</Text>
              </View>
            </View>
          </View>
        </MarginHorizontal>
      </View> 
    </View>
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
    backgroundColor: '#F6F5FB'
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
  textBold: {
    fontWeight: "bold"
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
