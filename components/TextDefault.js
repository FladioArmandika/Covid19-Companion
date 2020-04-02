import React from 'react'
import { Text, StyleSheet } from "react-native";
import { normalize } from '../helpers/normalize';
import Colors from '../constants/Colors';

export default function TextDefault({
        children, secondary,
        small, medium, large, xlarge, jumbo, 
        white, bold, style, center, left, right,
        colorPrimary,
        colorDanger, colorWarning, colorSuccess
    }) {
    return (
        <Text style={[
                {fontFamily:'gotham-medium'}, 
                {color: Colors.primaryText},
                style, 
                center ? {textAlign: "center"} : '',
                left ? {textAlign: "left"} : '',
                right ? {textAlign: "right"} : '',
                bold ? styles.bold : '', 
                white ? styles.white: '',
                secondary ? {color: Colors.secondaryText} : '',
                colorPrimary ? {color: Colors.primary} : '',
                colorDanger ? {color: Colors.danger} : '',
                colorWarning ? {color: Colors.warning} : '',
                colorSuccess ? {color: Colors.success} : '',
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
