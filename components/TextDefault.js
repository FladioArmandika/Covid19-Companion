import React from 'react'
import { Text, StyleSheet } from "react-native";
import { normalize } from '../helpers/normalize';
import Colors from '../constants/Colors';

export default function TextDefault({
        children, secondary,
        small, medium, large, xlarge, jumbo, 
        white, bold, style
    }) {
    return (
        <Text style={[
                {fontFamily:'gotham-medium'}, 
                {color: Colors.primaryText},
                style, 
                bold ? styles.bold : '', 
                white ? styles.white: '',
                secondary ? {color: Colors.secondaryText} : '',
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
        // color: '#ff00ff'
    },
    white: {
        color: '#ffffff'
    },
    primary: {
        color: '#e77f67',
    }
})
