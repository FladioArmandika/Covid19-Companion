import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function MarginHorizontal({children}) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    }
})
