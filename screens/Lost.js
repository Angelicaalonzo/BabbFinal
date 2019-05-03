import React from 'react';
import * as firebase from 'firebase';
import Keys from '../Keys.json';
import "@firebase/firestore";
import { ScrollView } from 'react-native';
import { Card, Text} from 'react-native-elements';

var config = {
  databaseURL: "https://edsigcon.firebaseio.com",
  projectId: "edsigcon",
};

firebase.initializeApp(config);

var cards = [];

getItems();
async function getItems() {
  const mainData = await firebase.firestore().collection("items").get(); 
  var relData = mainData.docs.map(doc => doc.data());

  for (var i = 0; i < relData.length; i++) {
    cards.push(<Card>
                <Text h3 style={{color:'dodgerblue'}}>{relData[i].Name}</Text>
                <Text style={{fontWeight:'bold'}}>{relData[i].Location + "\n"}</Text>
               </Card>)
}
}

export default class Lost extends React.Component {
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
