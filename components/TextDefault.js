import React from 'react'
import { Text, StyleSheet } from "react-native";
import { normalize } from '../helpers/normalize';

export default function TextDefault({...props}) {
    return (
        <Text style={[
            {fontFamily:'gotham-medium'}, 
                props.style, 
                props.bold ? styles.bold : '',
                props.white ? styles.white: '',
                props.jumbo ? {fontSize: normalize(24)} : '',
                props.xlarge ? {fontSize: normalize(20)} : '',
                props.large ? {fontSize: normalize(16)} : '',
                props.medium ? {fontSize: normalize(12)} : '',
                props.small ? {fontSize: normalize(10)} : '',
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
