import React from 'react'
import { Text } from "react-native";

export default function TextDefault({...props}) {
    return (
        <Text style={[{fontFamily:'gotham-medium'}, props.style]}>
            {props.children}
        </Text>
    )
}
