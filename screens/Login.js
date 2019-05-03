import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

//FIXME The next step is set up users in Firebase

export default class Login extends Component {
  static navigationOptions = {
    title: 'Log Into Your Account',
  };
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button
          title="Log In"
          onPress={() =>
            this.props.navigation.navigate('Account')
          }
        />
          </Form>
        </Content>

       
      </Container>
    );
  }
}