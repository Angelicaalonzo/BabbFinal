import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class FAQ extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Home"
          onPress={() => this.props.navigation.navigate('Home')
          }
        />
        <Text> This is the FAQ page. </Text>
        <Text> Click to see what is in the lost & found! </Text>
        <Button title="Lost and Found"
          onPress={() => this.props.navigation.navigate('Lost')
          }
        />
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