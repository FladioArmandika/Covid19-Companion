import React from 'react'
import { Text, StyleSheet } from "react-native";
import { normalize } from '../helpers/normalize';

export default function TextDefault({
        children,
        small, medium, large, xlarge, jumbo, 
        white, bold, style
    }) {
    return (
        <Text style={[
            {fontFamily:'gotham-medium'}, 
                style, 
                bold ? styles.bold : '',
                white ? styles.white: '',
                jumbo ? {fontSize: normalize(24)} : '',
                xlarge ? {fontSize: normalize(20)} : '',
                large ? {fontSize: normalize(16)} : '',
                medium ? {fontSize: normalize(12)} : '',
                small ? {fontSize: normalize(10)} : '',
            ]}>
            {children}
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
