import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'

export default function Flex({children, direction}) {

    if (direction == 'horizontal') {
        return (
            <View style={[styles.flex, {flexDirection: 'row'}]}>
                {children}
            </View>
        )
    } else {
        return (
            <View style={[styles.flex, {flexDirection: 'column'}]}>
                {children}
            </View>
        )
    }


    
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        alignItems: "center",
        justifyContent:"space-between"
    }
    
})