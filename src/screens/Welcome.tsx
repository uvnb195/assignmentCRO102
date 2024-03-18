import React from 'react'
import { Button, Image, Text, TouchableOpacity, View } from 'react-native'
import ScreenWrapper from '../components/ScreenWrapper'
import { GridCard, RowCard } from '../components/card'
import { itemBgLight, textBody2Gray, textTitle1, textTitle2, textWelcome } from '../theme'
import BlurView from '../components/BlurView'
import { useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../../App'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'

const Welcome = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>()
    return (
        <ScreenWrapper
            backgroundSrc={require('../assets/background-start.png')}
            containerClassName='h-full w-full py-[80px] px-[20px]'>
            <View className='w-full h-full flex-col justify-between'>
                <Text className={textWelcome}>
                    Welcome to NFT Marketplace
                </Text>

                <BlurView backgroundSrc={require('../assets/background-start.png')}
                    containerClassName={'w-full h-[200px] p-lg border-2 border-card rounded-lg flex-col items-center justify-between'}
                    borderRadius={28} >
                    <>
                        <View className='flex-col gap-y-2 items-center'>
                            <Text className={textTitle2}>
                                Explore and Mint NFTs
                            </Text>
                            <Text className={textBody2Gray + " text-center"}>
                                You can buy and sell the NFTs of the best artists in the world.
                            </Text>
                        </View>
                        <TouchableOpacity
                            className='py-sm px-lg flex bg-start_button rounded-lg items-center border-card border-2'
                            onPress={() => { navigation.replace('Home') }}>
                            <Text className={textTitle2}>Get started now</Text>
                        </TouchableOpacity>
                    </>
                </BlurView>

            </View>
        </ScreenWrapper>
    )
}

export default Welcome