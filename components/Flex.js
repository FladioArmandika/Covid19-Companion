import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'

export default function Flex(props) {

        return (
            <View style={[
                
                props.horizontal ? styles.horizontal : '',
                props.vertical ? styles.vertical : '',
                props.spacebetween ? styles.spaceBetween : '',
                props.spacearound ? styles.spaceAround : '',
                props.center ? styles.justifyCenter : '', 
                {alignItems: props.alignItems},
                {alignContent: props.alignContent},
                {alignSelf: props.alignSelf},
                props.parent ? {flex: 0} : styles.flex,
                ]}>
                {props.children}
            </View>
        )


    
}

const styles = StyleSheet.create({
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