import React from 'react'
import { Button, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import TextDefault from './TextDefault';

import Colors from '../constants/Colors'

export default function ButtonApp(props) {
    return (
        // <Button title={props.children} />
        <TouchableOpacity 
            onPress={() => props.nav.navigate(props.onPress)}
            style={[
                styles.button,
                props.primary ? styles.primary : '',
            ]}>
            {
                props.light ? 
                <TextDefault>DETAIL</TextDefault>
                :
                <TextDefault white>DETAIL</TextDefault>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        backgroundColor: '#3498db',
        borderRadius: 10,
        marginTop: 10,
        justifyContent: 'center', 
        alignItems:'center',
        padding: 15
    },
    primary: {
        backgroundColor: Colors.primary,
    }
})

