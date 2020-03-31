import React from 'react'
import { Button, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import TextDefault from './TextDefault';

import Colors from '../constants/Colors'

export default function ButtonApp({
    children, style, nav, light, dark,
    primary, secondary, 
    margin, marginTop,
    onPress
}) {
    return (
        <TouchableOpacity 
            onPress={() => nav.navigate(onPress)}
            style={[
                styles.button,
                primary ? styles.primary : '',
                marginTop ? {marginTop: marginTop} : '',
            ]}>
            {
                light ? 
                <TextDefault>{children}</TextDefault>
                :
                <TextDefault white>{children}</TextDefault>
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

