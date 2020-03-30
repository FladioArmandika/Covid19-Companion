import React from 'react'
import { View, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

export default function Background(props) {
    return (
        <View
            style={[
                props.primary ? {backgroundColor: Colors.primary} : '',
                props.bgprimary ? {backgroundColor: Colors.primaryBackground} : '',
                props.bgsecondary ? {backgroundColor: Colors.secondaryBackground} : '',
                props.absolute ? {position: "absolute"} : '',
                props.z ? {zIndex: props.z} : '',
                props.top ? {top: props.top} : '',
                props.left ? {left: props.left} : '',
                props.right ? {right: props.right} : '',
                props.bottom ? {bottom: props.bottom} : '',
                props.height ? {height: props.height} : '',
                props.width ? {width: props.width} : '',
                props.color ? {backgroundColor: props.color} : '',
            ]}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    
})
