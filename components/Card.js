import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function Card(props) {
    return (
        <View style={[styles.card]}>
            {props.children}
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        paddingHorizontal: 15,
        paddingVertical: 25,
        borderRadius: 10,
        margin:5
    },
})