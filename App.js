import React from 'react';
import {createStackNavigator} from 'react-navigation';
import AuthScreen from './src/screens/Auth/Auth'
import HomeScreen from './src/screens/Auth/HomeScreen'

export default class App extends React.Component{
  render(){
    return(
      <AppStackNavigator />
    )
  }
}

const AppStackNavigator = createStackNavigator({
  Auth: {
    screen: AuthScreen
  },
  Home: {
    screen: HomeScreen
  }
})