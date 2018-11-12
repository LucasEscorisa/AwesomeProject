import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';

class AuthScreen extends Component{

    loginHandler = () => {

    }
    
    render(){
        return(
            <View style={{padding: 20}}>
                <Text>Auth Screen</Text>
                <Button title="Login" 
                onPress={() => this.props.navigation.navigate('App')} /> 
            </View>
        );
    }
}

export default AuthScreen;