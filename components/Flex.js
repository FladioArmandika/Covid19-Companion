import React, { useEffect } from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'

export default function Flex({
    parent, style, children,
    horizontal, vertical,
    spacebetween, spacearound, center, 
    alignItems, alignContent, alignSelf
}) {

    return (
        <View style={[
            horizontal ? styles.horizontal : '',
            vertical ? styles.vertical : '',
            spacebetween ? styles.spaceBetween : '',
            spacearound ? styles.spaceAround : '',
            center ? styles.justifyCenter : '', 
            {alignItems: alignItems},
            {alignContent: alignContent},
            {alignSelf: alignSelf},
            parent ? {flex: 0} : styles.flex,
            style, 
            ]}>
            {children}
        </View>
    )


    
}

const styles = StyleSheet.create({
    test: {
        backgroundColor: '#0f0fff'
    },  
    flex: {
        flex: 1,
    },
    horizontal: {
        flexDirection: 'row'
    },
    vertical: {
        flexDirection: 'column'
    },
    spaceBetween: {
        justifyContent: 'space-between'
    },
    spaceAround: {
        justifyContent: 'space-around'
    },
    justifyCenter: {
        justifyContent: 'center'
    }
})