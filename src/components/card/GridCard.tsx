import React from 'react'
import { Image, Text, View } from 'react-native'
import { itemBgLight, textBody1, textBody2, textBody2Gray, textTitle3 } from '../../theme'
import SmallIcon from '../icon/SmallIcon'

const GridCard = () => {
    return (
        <View
            className='mt-[20px] rounded-lg border-2 p-2 min-w-max'
            style={itemBgLight}>
            <Image source={require('../../assets/products/img2.png.png')} className='w-[155px] h-[155px] rounded-[22px]' />

            <Text className={textBody2 + ' pb-sm pt-md'}>Title</Text>

            <Text className={textBody2Gray}>description</Text>

            {/* stat */}
            <View className='flex-row w-max py-2 items-center justify-between'>
                <View className='flex flex-row items-center'>
                    <SmallIcon name={'currency'} size={16} containerClassName='p-0' />
                    <Text className={textBody2}>0.002</Text>
                </View>
                <View className='flex flex-row items-center'>
                    <SmallIcon name={'heart'} size={16} containerClassName='px-2' />
                    <Text className={textBody2Gray}>200</Text>
                </View>
            </View>
        </View>
    )
}

export default GridCard