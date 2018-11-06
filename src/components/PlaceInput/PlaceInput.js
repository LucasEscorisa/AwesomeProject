import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    Button
} from "react-native";

class placeInput extends Component {

    state = {
        placeName: ''
      };
    
    placeNameChangedHandler = val => {
        this.setState({
            placeName : val
        })
    };

    placeSubmitHandler = () =>{
        if(this.state.placeName.trim() === ""){
          return;
        }
    
        this.props.onPlaceAdded(this.state.placeName);

      };

    render() {
        return (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            style={{width: 300}}
            placeholder="An Awesome Placeeee"
            value = {this.state.placeName}
            onChangeText = {this.placeNameChangedHandler} />

          <Button
            style={styles.placeButton}
            title="add"
            onPress={this.placeSubmitHandler}/>
        </View>
        );
    }
}
export default placeInput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    placeInput: {
        width: "70%",
    },
    placeButton: {
        width: "30%",
    },
});