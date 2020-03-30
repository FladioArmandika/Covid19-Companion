import React from 'react'
import { View } from 'react-native'

export default function Margin(props) {
    return (
        <View
            style={[
                props.top ? {marginTop: props.top} : '',
                props.bottom ? {marginBottom: props.bottom} : '',
                props.left ? {marginLeft: props.left} : '',
                props.right ? {marginRight: props.right} : '',
                props.vertical ? {marginVertical: props.vertical} : '',
                props.horizontal ? {marginHorizontal: props.horizontal} : '',
                props.start ? {marginStart: props.start} : '',
                props.end ? {marginEnd: props.end} : '',
                props.all ? {margin: props.all} : '',
            ]}>
            {props.children}
        </View>
    )
}
