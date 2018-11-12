import React from 'react';
import {createStackNavigator, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

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

const AppNavigator = createMaterialBottomTabNavigator({
  SharePlace: {
    screen: SharePlaceScreen,
    navigationOptions: {
      tabBarLabel: 'Share Places',
      tabBarIcon: ({tintColor})=>(
        <Icon name="ios-share-alt" color={tintColor} size={24} />
      )
    }
    
  },
  FindPlace: {
    screen: FindPlaceScreen,
    navigationOptions: {
      tabBarLabel: 'Find Places',
      tabBarIcon: ({tintColor})=>(
        <Icon name="md-map" color={tintColor} size={24} />
      )
    }
  }
},{
  activeTintColor: 'blue',
  inactiveTintColor: 'grey',
  
  barStyle: {
    backgroundColor: 'white'
  }


})

export default SwitchNavigator = createSwitchNavigator({
  Auth: AuthScreen,
  App: AppNavigator
})