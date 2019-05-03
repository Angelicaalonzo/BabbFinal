import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

export default class Register extends React.Component {
  static navigationOptions = {
    title: 'Register for EDSIGCON',
  };
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
              <Item stackedLabel last>
                <Label>Email</Label>
                <Input />
              </Item>
              <Item stackedLabel>
                <Label>Username</Label>
                <Input />
              </Item>
              <Item stackedLabel last>
                <Label>Password</Label>
                <Input />
              </Item>
              <Item stackedLabel last>
                <Label>Repeat Password</Label>
                <Input />
              </Item>
              <Button
            title="Register"
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});