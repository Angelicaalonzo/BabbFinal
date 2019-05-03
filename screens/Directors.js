import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export default class ListThumbnailExample extends Component {
  static navigationOptions = {
    title: 'Directors',
  };
  render() {
    return (
      <Container>
        <Header />
        <Content>
        
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://edsigcon.org/assets/img/team/shannon2.jpg' }} />
              </Left>
              <Body>
                <Text>SLi-Jen Lester</Text>
                <Text note numberOfLines={1}>CONFERENCE CHAIR</Text>
              </Body>
              <Right>
                
              </Right>
            </ListItem>
            
          </List>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://edsigcon.org/assets/img/team/janicki.jpg' }} />
              </Left>
              <Body>
                <Text>Tom Janicki</Text>
                <Text note numberOfLines={1}>MEETING PLANNER, PANELS & WORKSHOPS COORDINATOR & JOURNAL PUBLISHER</Text>
              </Body>
              <Right>
                
              </Right>
            </ListItem>
            
          </List>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://edsigcon.org/assets/img/team/sharp.jpg' }} />
              </Left>
              <Body>
                <Text>Jason Sharp</Text>
                <Text note numberOfLines={1}>PAPERS CHAIR, EDSIGCON</Text>
              </Body>
              <Right>
                
              </Right>
            </ListItem>
            
          </List>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://edsigcon.org/assets/img/team/ghosh.jpg' }} />
              </Left>
              <Body>
                <Text>Biswadip Ghosh</Text>
                <Text note numberOfLines={1}>PAPERS CHAIR, CONISAR</Text>
              </Body>
              <Right>
                
              </Right>
            </ListItem>
            
          </List>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://edsigcon.org/assets/img/team/witman.jpg' }} />
              </Left>
              <Body>
                <Text>Paul Witman</Text>
                <Text note numberOfLines={1}>CASES CO-CHAIR</Text>
              </Body>
              <Right>
                
              </Right>
            </ListItem>
            
          </List>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://edsigcon.org/assets/img/team/goldstein.jpg' }} />
              </Left>
              <Body>
                <Text>SLi-Jen Lester</Text>
                <Text note numberOfLines={1}>Ira Goldstein</Text>
              </Body>
              <Right>
                
              </Right>
            </ListItem>
            
          </List>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://edsigcon.org/assets/img/team/cummings.jpg' }} />
              </Left>
              <Body>
                <Text>Jeff Cummings</Text>
                <Text note numberOfLines={1}>ABSTRACTS CHAIR</Text>
              </Body>
              <Right>
                
              </Right>
            </ListItem>
            
          </List>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://edsigcon.org/assets/img/team/bakir.jpg' }} />
              </Left>
              <Body>
                <Text>Nesrin Bakir</Text>
                <Text note numberOfLines={1}>PANELS & WORKSHOPS CHAIR</Text>
              </Body>
              <Right>
                
              </Right>
            </ListItem>
            
          </List>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://edsigcon.org/assets/img/team/mew.jpg' }} />
              </Left>
              <Body>
                <Text>Lionel Mew</Text>
                <Text note numberOfLines={1}>ASST. PAPER CHAIR, CONISAR</Text>
              </Body>
              <Right>
                
              </Right>
            </ListItem>
          </List>

          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://edsigcon.org/assets/img/team/dalat-ward.png' }} />
              </Left>
              <Body>
                <Text>Yaprak Dalat-Ward</Text>
                <Text note numberOfLines={1}>ASST. PAPERS CHAIR, EDSIGCON</Text>
              </Body>
              <Right>
               
              </Right>
            </ListItem>
            
          </List>

          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://edsigcon.org/assets/img/team/xiong.png' }} />
              </Left>
              <Body>
                <Text>Jason Xiong</Text>
                <Text note numberOfLines={1}>ASST. PAPERS CHAIR, EDSIGCON</Text>
              </Body>
              <Right>
                
              </Right>
            </ListItem>
            
          </List>

          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://edsigcon.org/assets/img/team/blundell.jpg' }} />
              </Left>
              <Body>
                <Text>Greg Blundell</Text>
                <Text note numberOfLines={1}>SPONSORS CHAIR & LOCAL SUPPORT</Text>
              </Body>
              <Right>
               
              </Right>
            </ListItem>
            
          </List>

          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://edsigcon.org/assets/img/team/berardi.jpg' }} />
              </Left>
              <Body>
                <Text>Victor Berardi</Text>
                <Text note numberOfLines={1}>GUEST PACKAGE CHAIR & LOCAL SUPPORT</Text>
              </Body>
              <Right>
                
              </Right>
            </ListItem>
            
          </List>

          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://edsigcon.org/assets/img/team/pomykalski.jpg' }} />
              </Left>
              <Body>
                <Text>James Pomykalski</Text>
                <Text note numberOfLines={1}>AWARDS CHAIR</Text>
              </Body>
              <Right>
                
              </Right>
            </ListItem>
            
          </List>

          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://edsigcon.org/assets/img/team/mew.jpg' }} />
              </Left>
              <Body>
                <Text>Anthony Serapiglia</Text>
                <Text note numberOfLines={1}>CYBERSECURITY TRACK-CHAIR</Text>
              </Body>
              <Right>
                
              </Right>
            </ListItem>
            
          </List>

          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://edsigcon.org/assets/img/team/hunsinger.jpg' }} />
              </Left>
              <Body>
                <Text>Scott Hunsinger</Text>
                <Text note numberOfLines={1}>JISAR EDITOR</Text>
              </Body>
              <Right>
                
              </Right>
            </ListItem>
            
          </List>

          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://edsigcon.org/assets/img/team/babb.png' }} />
              </Left>
              <Body>
                <Text>Jeff Babb</Text>
                <Text note numberOfLines={1}>ISEDJ EDITOR, EDSIG PRESIDENT & REGISTRATION SYSTEMS</Text>
              </Body>
              <Right>
                
              </Right>
            </ListItem>
            
          </List>

          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://edsigcon.org/assets/img/team/ceccucci.jpg' }} />
              </Left>
              <Body>
                <Text>Wendy A. Ceccucci</Text>
                <Text note numberOfLines={1}>ABEST PAPER CHAIR</Text>
              </Body>
              <Right>
               
              </Right>
            </ListItem>
            
          </List>

          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://edsigcon.org/assets/img/team/wag.png' }} />
              </Left>
              <Body>
                <Text>Leslie Waguespack</Text>
                <Text note numberOfLines={1}>EDSIG PAST PRESIDENT</Text>
              </Body>
              <Right>
               
              </Right>
            </ListItem>
            
          </List>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://edsigcon.org/assets/img/team/breimer.jpg' }} />
              </Left>
              <Body>
                <Text>Eric Breimer</Text>
                <Text note numberOfLines={1}>WEBSITE</Text>
              </Body>
              <Right>
                
              </Right>
            </ListItem>
            
          </List>


          

        </Content>
      </Container>
    );
  }
}


