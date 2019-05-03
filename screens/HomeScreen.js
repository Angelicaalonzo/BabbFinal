import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> This is the home page. </Text>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Button
          title="Register"
          onPress={() => this.props.navigation.navigate('Register')}
        />
        <Button
          title="Map"
          onPress={() => this.props.navigation.navigate('Map')}
        />
        <Button
          title="Schedule"
          onPress={() => this.props.navigation.navigate('Schedule')}
        />
        <Button
          title="Social Media"
          onPress={() => this.props.navigation.navigate('SocialMedia')}
        />
        <Button
          title="Sponsors"
          onPress={() => this.props.navigation.navigate('Sponsors')}
        />
        <Button
          title="Directors"
          onPress={() => this.props.navigation.navigate('Directors')}
        />
        <Button
          title="Speakers"
          onPress={() => this.props.navigation.navigate('Speakers')}
        />
        <Button
          title="Lost & Found"
          onPress={() => this.props.navigation.navigate('Lost')}
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