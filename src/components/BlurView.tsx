import React from 'react'
import { ImageBackground, View } from 'react-native'

type Props = {
    children?: React.JSX.Element,
    containerClassName?: string,
    backgroundSrc?: any,
    blurRadius?: number,
    borderRadius?: number,
    rgbaColor?: {
        backgroundColor?: string,
        borderColor?: string,
    }
}

const BlurView = ({ children, backgroundSrc, blurRadius, borderRadius, rgbaColor, containerClassName }: Props) => {
    return (

        <ImageBackground
            source={backgroundSrc} resizeMode='cover' blurRadius={blurRadius || 5}
            style={{
                backgroundColor: rgbaColor?.backgroundColor || 'transparent',
                borderRadius: borderRadius || 10,
            }}
            imageStyle={{
                borderRadius: borderRadius || 10,
                borderWidth: 1,
                borderColor: rgbaColor?.borderColor || 'transparent',
            }} >
            <View className={containerClassName}>
                {children}
            </View>
        </ImageBackground >
    )
}

export default BlurView