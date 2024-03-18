import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import ScreenWrapper from './src/components/ScreenWrapper';
import { bgGradient, bgStart } from './src/assets';
import { black, itemBgDark, itemBgLight, textGreen, textBody2Gray, white, red, textTitle3, textWhite, textTitle1, textTitle2, textBody1, textBody2, textRed } from './src/theme';
import BlurView from './src/components/BlurView';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import SmallIcon from './src/components/icon/SmallIcon';
import NavIcon from './src/components/icon/NavIcon';
import { ColumnCard, GridCard, MenuCard, RowCard } from './src/components/card/'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from './src/screens/Welcome';
import Home from './src/screens/Home';

const productImg = require('./src/assets/products/img.png')
const Stack = createNativeStackNavigator<RootStackParams>()

export type RootStackParams = {
  Welcome: undefined,
  Home: undefined
}

const App = () => (
  <NavigationContainer>
    <StatusBar style='light' />
    <Stack.Navigator
      initialRouteName='Welcome'
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name='Welcome' component={Welcome} />
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>

  </NavigationContainer>
)

export default App