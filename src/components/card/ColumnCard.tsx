import { BlurView } from 'expo-blur'
import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'
import { textTitle2, white } from '../../theme'
import { LinearGradient } from 'expo-linear-gradient'

type Props = {
    size: { width: number, height: number },
}

const ColumnCard = ({ size }: Props) => {
    return (
        <View className={`flex-col relative rounded-[30px] justify-center border-[2px] border-card`}
            style={size}>
            {/* background img */}
            <Image source={require('../../assets/products/img.png')} resizeMode='cover' className='w-full h-full bg-gradient-to-b from-black to-transparent rounded-[30px]' />
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 0.99 }}
                colors={['transparent', 'rgba(0,0,0,1 )']}
                locations={[0.5, 1]}
                className='w-full h-full absolute bottom-0 rounded-[28px]'
            >

            </LinearGradient>

            {/* blur view */}
            <BlurView intensity={1} className='absolute py-4 w-full items-center bottom-0'>
                <Text className={textTitle2 + ' z-20'}>Music</Text>

            </BlurView>

            {/* <BlurView intensity={20} className='z-10 py-4 w-full items-center'>
                <Text className={textTitle2}>sdfdsfsdf</Text>
            </BlurView> */}
        </View >
    )
}

export default ColumnCard