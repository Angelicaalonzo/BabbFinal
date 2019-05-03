import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export default class Sponsors extends Component {
  static navigationOptions = {
    title: 'Sponsors',
  };
  render() {
    return (
      <Container>
        <Header />        
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/MHE_Logo_RGB.png/220px-MHE_Logo_RGB.png' }} />
              </Left>
              <Body>
                <Text>Mcgraw Hill</Text>
              </Body>
              <Right>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'data:image/png;base64,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' }} />
              </Left>
              <Body>
                <Text>Mendix</Text>
                
              </Body>
              <Right>
                
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://images.youracclaim.com/images/854d76bf-4f74-4d51-98a0-d969214bfba7/IBM%2BLogo%2Bfor%2BAcclaim%2BProfile.png' }} />
              </Left>
              <Body>
                <Text>IBM</Text>
                
              </Body>
              <Right>
                
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://pbs.twimg.com/profile_images/893467867999604736/eFGZ67kg_400x400.jpg' }} />
              </Left>
              <Body>
                <Text>Pega</Text>
                
              </Body>
              <Right>
                
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://prospectpressvt.com/wp-content/uploads/2018/07/footer-logo.png' }} />
              </Left>
              <Body>
                <Text>Prospect Press</Text>
                
              </Body>
              <Right>
                
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.myeducator.com/static/base_app/media/myeducator200-logo.png' }} />
              </Left>
              <Body>
                <Text>My educator</Text>
                
              </Body>
              <Right>
                
              </Right>
            </ListItem>
          </List>

          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'data:image/png;base64,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' }} />
              </Left>
              <Body>
                <Text>PaloAlto</Text>
                
              </Body>
              <Right>
                
              </Right>
            </ListItem>
          </List>

          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'Vls8zNknJfqelgxenThKla4AAAAAAAAAAAAAAAAAAAABjAGSBjA5lHBglJggMAMEhgBgBgBgAAwOTiGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB' }} />
              </Left>
              <Body>
                <Text>Information Builders </Text>
                
              </Body>
              <Right>
                
              </Right>
            </ListItem>
          </List>

          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.cengage.com/webfiles/latest/cengage/common/images/og_logo.png' }} />
              </Left>
              <Body>
                <Text>Cengage</Text>
                
              </Body>
              <Right>
                
              </Right>
            </ListItem>
          </List>

          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/052013/app_state_logo.jpg?itok=j3-NCKSA' }} />
              </Left>
              <Body>
                <Text>Walker College of Business </Text>
                
              </Body>
              <Right>
                
              </Right>
            </ListItem>
          </List>

          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.linkedin.com/media-proxy/ext?w=1000&h=1009&hash=HDpf4p8%2BqrXyGQRJS6whAXHrO2o%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6nlh8Tw1It6a2FowGz60oIQY_PTWn8CnL_5aaEFXXrCKanI-vorV9DAG9BxmUtKbr9FHO5Q9HpNsm3P4Uv0PjtJZnmKVdZbEFn0DwWvYZvbUl084L7B-7kYWhaj-gVNCyPHZDbN18zCSwt9-aIPNDNH2oUzGKqFOjUS-pnS5JSopl58k9llp0' }} />
              </Left>
              <Body>
                <Text>Paul and Virginia Engler College of Business </Text>
                
              </Body>
              <Right>
                
              </Right>
            </ListItem>
          </List>

          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://prd-wret.s3-us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/full_width/public/thumbnails/image/Homepage_UNCW_Homepage%20Rotation%20Logo.png' }} />
              </Left>
              <Body>
                <Text>Cameron School of Business </Text>
                
              </Body>
              <Right>
                
              </Right>
            </ListItem>
          </List>

          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'data:image/jpeg;base64,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' }} />
              </Left>
              <Body>
                <Text>Siena College </Text>
                
              </Body>
              <Right>
                
              </Right>
            </ListItem>
          </List>


          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.qu.edu/content/dam/qu/logos/quinnipiac-wordmark-2000x1333.png' }} />
              </Left>
              <Body>
                <Text>Quinnapiac University </Text>
                
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


// import React from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';

// export default class Speakers extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Button
//           title="Home"
//           onPress={() =>
//             this.props.navigation.navigate('Home')
//           }
//         />
//         <Text> This is the speakers page. </Text>
//       </View>
//     );
//   }
// }