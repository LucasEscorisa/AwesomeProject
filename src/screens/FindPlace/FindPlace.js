import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class FindPlaceScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>FindPlaceScreen</Text>
            </View>
        );
    }
}
export default FindPlaceScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});