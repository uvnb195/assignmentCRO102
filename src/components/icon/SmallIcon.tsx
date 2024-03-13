import {
    MaterialCommunityIcons,
    Octicons,
    SimpleLineIcons
} from '@expo/vector-icons'
import React from 'react'
import { white } from '../../theme'
import { View } from 'react-native'

type Props = {
    containerClassName?: string,
    name: 'currency' | 'heart' | 'category' | 'link'
    color?: string,
    size?: number
}
const SmallIcon = ({ containerClassName, name, color, size }: Props) => {
    const renderIcon = () => {
        switch (name) {
            case 'currency':
                return (
                    <MaterialCommunityIcons name={'ethereum'} size={size || 20} color={color || white(0.5)} />
                )
            case 'heart':
                return (
                    <Octicons name={color ? 'heart-fill' : 'heart'} size={size || 20} color={color || white(0.5)} />
                )
            case 'category':
                return (
                    <SimpleLineIcons name='grid' size={size || 20} color={color || white(0.5)} />
                )

            case 'link': return (
                <SimpleLineIcons name='link' size={size || 20} color={color || white(0.5)} />
            )
        }
    }
    return (
        <View className={containerClassName || 'p-2'}>
            {renderIcon()}
        </View>
    )
}

export default SmallIcon