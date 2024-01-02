import React from 'react'
import { Text, View } from 'react-native'

export const PrimaryButton = ({ children }: Props) => {
    return (
        <View>
            <Text>{children}</Text>
        </View>
    )
}

type Props = {
    children: React.ReactNode
}
