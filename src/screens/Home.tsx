import React from 'react'
import { SafeAreaView, ScrollView, Text, View, useWindowDimensions } from 'react-native'
import ScreenWrapper from '../components/ScreenWrapper'
import { textTitle1, textTitle2 } from '../theme'
import { ColumnCard, GridCard } from '../components/card'
import { LargeSpacing, SmallSpacing } from '../components/spacing'
const Home = () => {
    const { width, height } = useWindowDimensions()

    return (
        <ScrollView>
            <ScreenWrapper containerClassName='w-full h-full pt-lg px-sm items-center justify-evenly'>

                <Text className={textTitle1}>NFT Marketplace</Text>
                <LargeSpacing />

                <ScrollView horizontal showsHorizontalScrollIndicator={false} className='w-full' >
                    <View className='flex-row items-start h-[200px]'>

                        <ColumnCard size={{ width: Math.floor(width * 0.9), height: 200 }} />
                        <SmallSpacing />
                        <ColumnCard size={{ width: Math.floor(width * 0.9), height: 200 }} />

                        <SmallSpacing />
                        <ColumnCard size={{ width: Math.floor(width * 0.9), height: 200 }} />
                    </View>
                </ScrollView>
                <LargeSpacing />

                {/* Collections */}
                <Text className={textTitle2 + ' w-full'}>Trending Collections</Text>
                <SmallSpacing />
                <ScrollView horizontal className=''
                    showsHorizontalScrollIndicator={false}
                >
                    <View className='flex-row items-start'>
                        <GridCard />
                        <SmallSpacing />
                        <GridCard />
                        <SmallSpacing />
                        <GridCard />
                        <SmallSpacing />
                        <GridCard />
                    </View>
                </ScrollView>
                <LargeSpacing />



                {/* top seller */}
                <Text className={textTitle2 + ' w-full'}>Top Seller</Text>
                <SmallSpacing />
                <ScrollView horizontal className=''
                    showsHorizontalScrollIndicator={false}
                >
                    <View className='flex-row items-start'>
                        <GridCard />
                        <SmallSpacing />
                        <GridCard />
                        <SmallSpacing />
                        <GridCard />
                        <SmallSpacing />
                        <GridCard />
                    </View>
                </ScrollView>
                <LargeSpacing />

            </ScreenWrapper>
        </ScrollView >
    )
}

export default Home