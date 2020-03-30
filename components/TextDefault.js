import React from 'react'
import { Text, StyleSheet } from "react-native";

export default function TextDefault({...props}) {
    return (
        <Text style={[
            {fontFamily:'gotham-medium'}, 
            props.style, 
            props.bold ? styles.bold : '',
            props.white ? styles.white: '',
            ]}>
            {props.children}
        </Text>
    )
}


const styles = StyleSheet.create({
    bold: {
        fontWeight: 'bold',
        color: '#ff00ff'
    },
    white: {
        color: '#ffffff'
    },
    primary: {
        color: '#e77f67',
    }
})
