import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Manufacturers extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Manufacturers</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
