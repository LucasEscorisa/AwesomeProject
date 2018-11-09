import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class SharePlaceScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>SharePlaceScreen</Text>
            </View>
        );
    }
}
export default SharePlaceScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});