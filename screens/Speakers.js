import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export default class Speakers extends Component {
  static navigationOptions = {
    title: 'Speakers',
  };
  render() {
    return (
      <Container>
        <Header />
        <Text>
          We would like to thank all of our sponsors for the 2019 Edsigcon conference. Without them this wouldn't be possible. 
        </Text>
        <Content>        
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}