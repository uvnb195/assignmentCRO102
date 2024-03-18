import React from 'react'
import { Image, ImageBackground, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import { bgGradient, bgStart } from '../assets'

type Props = {
    children: React.ReactNode,
    containerClassName?: string,
    backgroundSrc?: any,
}

const ScreenWrapper = ({ children, containerClassName, backgroundSrc }: Props) => {
    return (
        <View className={'relative ' + containerClassName}>
            <View className='absolute top-0 bottom-0 left-0 right-0'>
                <Image
                    className='w-full h-full'
                    source={backgroundSrc || bgGradient} resizeMode='cover' />
            </View>
            {children}
        </View>
    )
}

export default ScreenWrapper