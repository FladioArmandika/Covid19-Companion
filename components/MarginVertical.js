import React from 'react'
import { View } from 'react-native'

export default function MarginVertical(props) {
    return (
        <View 
            style={[
                {marginTop: props.top},
                {marginBottom: props.bottom},
                {marginVertical: props.both},
            ]}> 
            {props.children}
        </View>
    )
}

