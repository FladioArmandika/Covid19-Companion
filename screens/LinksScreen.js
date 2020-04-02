import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import axios from 'axios'
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Background from '../components/Background';
import TextDefault from '../components/TextDefault';
import Card from '../components/Card';
import Padding from '../components/Padding';


export default function LinksScreen() {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    axios.get('https://newsapi.org/v2/everything?q=covid19&language=id&pageSize=10&apiKey=f9a4af2a38864f37b7b75867f3e210a8','')
      .then(res => {
        setArticles(res.data.articles)
      })
      .catch(err => {
        console.error(err); 
      })

  }, [])

  return (
    <Background bgprimary height="100%">
      <ScrollView>
        <Padding horizontal={20} top={50}>
          {
            articles ?
              articles.map((article) => {
                return (
                  <Card>
                    <Image source={{uri: article.urlToImage}} height={50} width='100%'/>
                    <TextDefault large>{article.title}</TextDefault>
                    <TextDefault secondary  >{article.source.name} {}</TextDefault>
                  </Card>
                )
              })
              
            :
            <View></View>
          }
        </Padding>
      </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
});
