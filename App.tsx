import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ScreenWrapper from './src/components/ScreenWrapper';
import { bgGradient, bgStart } from './src/assets';
import React from 'react';
import { black, itemBgDark, itemBgLight, textGreen, textBody2Gray, white, red, textTitle3, textWhite, textTitle1, textTitle2, textBody1, textBody2, textRed } from './src/theme';
import BlurView from './src/components/BlurView';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import SmallIcon from './src/components/icon/SmallIcon';
import NavIcon from './src/components/icon/NavIcon';
import RowCard from './src/components/card/RowCard'

const App = () => {
  return (
    <>
      <StatusBar style='light' />

      <SafeAreaView>
        <ScreenWrapper containerClassName='w-full h-full items-center justify-center p-2' >

          <RowCard />
          {/* <BlurView rgbaColor={itemBgLight} containerClassName='flex flex-row items-center' >


          </BlurView> */}
        </ScreenWrapper>
      </SafeAreaView>
    </>
  );
}

export default App