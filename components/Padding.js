import React from 'react'
import { View } from 'react-native'

export default function Padding(props) {
    return (
        <View
            style={[
                props.top ? {paddingTop: props.top} : '',
                props.bottom ? {paddingBottom: props.bottom} : '',
                props.left ? {paddingLeft: props.left} : '',
                props.right ? {paddingRight: props.right} : '',
                props.vertical ? {paddingVertical: props.vertical} : '',
                props.horizontal ? {paddingHorizontal: props.horizontal} : '',
                props.start ? {paddingStart: props.start} : '',
                props.end ? {paddingEnd: props.end} : '',
                props.all ? {padding: props.all} : '',
            ]}>
            {props.children}
        </View>
    )
}
