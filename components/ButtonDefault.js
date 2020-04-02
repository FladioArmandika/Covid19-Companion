import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import TextDefault from './TextDefault'
import { StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

export default function ButtonDefault({
    children, style, nav, light, dark,
    primary, secondary, 
    margin, marginTop,
    onPress
}) {
    return (
        <TouchableOpacity
            onPress={() => onPress()}
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