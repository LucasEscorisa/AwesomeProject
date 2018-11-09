import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import AuthScreen from './src/screens/Auth/Auth'
import HomeScreen from './src/screens/Auth/HomeScreen'
import FindPlaceScreen from './src/screens/FindPlace/FindPlace'
import SharePlaceScreen from './src/screens/SharePlace/SharePlace'


export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      signedIn: false
    };
  }

  
  render(){

    if(this.state.signedIn){
      return(<BottomTab />)
    } else {
      return(<AppStackNavigator />)
    }
    
  }
}

//Router
const AppStackNavigator = createStackNavigator({
  Auth: {
    screen: AuthScreen
  },
  Home: {
    screen: HomeScreen
  }
})

const BottomTab = createBottomTabNavigator({
  SharePlace: SharePlaceScreen,
  FindPlace: FindPlaceScreen
})