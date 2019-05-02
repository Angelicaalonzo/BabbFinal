import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class SocialMedia extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
        <Text> This is the social media page. </Text>
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