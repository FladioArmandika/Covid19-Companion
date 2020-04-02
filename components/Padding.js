import React from 'react'
import { View } from 'react-native'

export default function Padding({
    children,
    top,bottom,left,right,
    vertical, horizontal,
    start, end, all
}) {
    return (
        <View
            style={[
                top ? {paddingTop: top} : '',
                bottom ? {paddingBottom: bottom} : '',
                left ? {paddingLeft: left} : '',
                right ? {paddingRight: right} : '',
                vertical ? {paddingVertical: vertical} : '',
                horizontal ? {paddingHorizontal: horizontal} : '',
                start ? {paddingStart: start} : '',
                end ? {paddingEnd: end} : '',
                all ? {padding: all} : '',
            ]}>
            {children}
        </View>
    )
}
