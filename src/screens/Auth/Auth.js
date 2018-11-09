import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';

class AuthScreen extends Component{
    render(){
        return(
            <View>
                <Text>Auth Screen</Text>
                <Button title="Home Screen" 
                onPress={() => this.props.navigation.navigate('Home')} /> 
            </View>
        );
    }
}

export default AuthScreen;