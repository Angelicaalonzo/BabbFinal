
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Account extends React.Component {
  static navigationOptions = {
    title: 'Your Account',
  };
  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});