import React from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';
import { SocialIcon } from 'react-native-elements'

export default class SocialMedia extends React.Component {
  static navigationOptions = {
    title: 'Social Media',
  };
  render() {
    return (
      <View style={styles.container}>
      {/* This code was based on examples from https://react-native-training.github.io/react-native-elements/docs/social_icon.html */}
        <SocialIcon 
          title='Follow us on Twitter'
          button
          // These are links directly to the convention's social media sites
          onPress={ ()=>{ Linking.openURL('https://twitter.com/edsigcon')}} 
          type='twitter' />
        <SocialIcon 
          title='Like us on Facebook'
          button
          onPress={ ()=>{ Linking.openURL('https://www.facebook.com/groups/edsig/')}} 
          type='facebook' />
        <SocialIcon 
          title='See our LinkedIn'
          button
          onPress={ ()=>{ Linking.openURL('https://www.linkedin.com/groups/8655139/')}} 
          type='linkedin' />
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