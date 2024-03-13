import React from 'react'
import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import { bgGradient, bgStart } from '../assets'

type Props = {
    children: React.ReactNode,
    containerClassName?: string,
    backgroundSrc?: any,
}

const ScreenWrapper = ({ children, containerClassName, backgroundSrc }: Props) => {
    return (
        <ImageBackground
            source={backgroundSrc || bgGradient} resizeMode='stretch'  >
            <View className={containerClassName}>
                {children}
            </View>
        </ImageBackground >
    )
}

// const styles = StyleSheet.create({
//     abeezee: {
//         fontFamily: 'ABeeZee-Regular',
//     }
// })

export default ScreenWrapper