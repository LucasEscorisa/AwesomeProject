import React from 'react';
import {createStackNavigator, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation';

import AuthScreen from './src/screens/Auth/Auth'
import HomeScreen from './src/screens/Auth/HomeScreen'
import FindPlaceScreen from './src/screens/FindPlace/FindPlace'
import SharePlaceScreen from './src/screens/SharePlace/SharePlace'


//Router
const AppStackNavigator = createStackNavigator({
  Auth: {
    screen: AuthScreen
  }
})

const AppNavigator = createBottomTabNavigator({
  SharePlace: SharePlaceScreen,
  FindPlace: FindPlaceScreen
})

export default SwitchNavigator = createSwitchNavigator({
  Auth: AuthScreen,
  App: AppNavigator
})