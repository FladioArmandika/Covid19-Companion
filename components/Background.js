import React from 'react'
import { View, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

export default function Background({
    children, style,
    primary, bgprimary, bgsecondary,
    absolute, z, top, left, bottom, right,
    height, width,
    color,
}) {
    return (
        <View
            style={[
                primary ? {backgroundColor: Colors.primary} : '',
                bgprimary ? {backgroundColor: Colors.primaryBackground} : '',
                bgsecondary ? {backgroundColor: Colors.secondaryBackground} : '',
                absolute ? {position: "absolute"} : '',
                z ? {zIndex: z} : '',
                top ? {top: top} : '',
                left ? {left: left} : '',
                right ? {right: right} : '',
                bottom ? {bottom: bottom} : '',
                height ? {height: height} : '',
                width ? {width: width} : '',
                color ? {backgroundColor: color} : '',
            ]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    
})
