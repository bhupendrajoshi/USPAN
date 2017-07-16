import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button title="Buyers" onPress={() => navigate('Buyers')} />
        <Button title="Manufacturers" onPress={() => navigate('Manufacturers')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
