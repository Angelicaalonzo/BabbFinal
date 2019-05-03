import React from 'react';
import * as firebase from 'firebase';
import Keys from './Keys.json';

firebase.initializeApp(Keys);

import { Image, Platform, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Card, Text, Avatar } from 'react-native-elements';

var cards = [];

getItems();
async function getItems() {
  const mainData = await firebase.firestore().collection("items").get(); // Replace "members" with the name of your collection
  var relData = mainData.docs.map(doc => doc.data());

  for (var i = 0; i < relData.length; i++) {
    cards.push(<Card>
                <Text h3 style={{color:'dodgerblue'}}>{relData[i].Name}</Text>
                <Text style={{fontWeight:'bold'}}>{relData[i].Location + "\n"}</Text>
              </Card>)
  // Properties that you set in the database will be accessed by their name in the database (ie. "Name", "School", "Role"). These will be whatever you set them to
}
}

export default class TopicsScreen extends React.Component {
  static navigationOptions = {
    title: 'Lost & Found',
  };

  render() {
    return (
        <ScrollView>
            {cards}
        </ScrollView>
    )
  }
}