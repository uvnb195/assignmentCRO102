import React from 'react'
import { textBody1, textBody2, textBody2Gray, textGreen, textWhite } from '../../theme'
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SmallIcon from '../icon/SmallIcon';

const productImg = require('../../assets/products/img.png')

type Props = {
    containerClassName?: string,
}
const RowCard = ({ containerClassName }: Props) => {
    return (
        <View className={containerClassName || 'flex-row'}>
            {/* index */}
            <View className='flex items-center justify-center'>
                <Text className={textWhite + ' pl-4'}>1</Text>
            </View>

            {/* image */}
            <View className='flex m-2 items-center justify-center flex-row'>
                <Image
                    source={productImg}
                    resizeMode='cover'
                    style={{
                        objectFit: 'cover'
                    }}
                    className='w-[44px] h-[44px] rounded-[10px]' />
            </View>

            {/* text section */}
            <View className={'flex-100 flex flex-row p-2'}>
                <View className={'flex flex-col p-2 justify-between items-start'}>
                    {/* text */}
                    <Text className={textBody1 + ' pb-2'}>Azumi</Text>
                    <Text className={textBody2Gray}>ViewInfo</Text>
                </View>

                {/* stats */}
                <View className='flex-col items-end justify-between' >
                    {/* number */}
                    <View className='flex flex-row items-center pl-4'>
                        <SmallIcon name={'currency'} size={16} />
                        <Text className={textBody2 + ' self-center'}>200055.02</Text>
                    </View>

                    {/* percent */}
                    <View className='' >
                        <Text className={`${textBody2} ${textGreen} pb-2`}>3,99%</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default RowCard