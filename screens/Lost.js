import React from 'react';
import * as firebase from 'firebase';
import Keys from '../Keys.json';
import "@firebase/firestore";
import { ScrollView } from 'react-native';
import { Card, Text} from 'react-native-elements';

// Most of this code came from a fellow student helping. He received the code from stack overflow.
// The link to the stack overflow page that helps resolve this issue: 
// https://stackoverflow.com/questions/52100103/getting-all-documents-from-one-collection-in-firestore

var config = {
  databaseURL: "https://edsigcon.firebaseio.com",
  projectId: "edsigcon",
};

// Here were are making the initial connection to our firebase project so that
// we can pull collections from out project
firebase.initializeApp(config);

var cards = [];

getItems();

// We used async instead of a promise. A promise in react native allows a 
// function to keep running until the promise is either resolved or denied.
// The promise allows for code on a local machine to get data from an online
// source without having to restart the entire program. Async allows
// for a background function to operate while the main program is running.
// A promise is normally used in React Native instead of async for ansyncronous
// functions as the standard.  

async function getItems() {

  // This line of code gets the collection "items" from our firebase database.
  // It will pull the data (the name of the lost item and the location of where
  // the item was lost) from "items". If we wanted to create another collection
  // for users in order to allow people to log into the app we could later on.
  const mainData = await firebase.firestore().collection("items").get(); 

  // The variable created here maps the data pulled from out lost items collection
  // in firebase and maps the data to return the raw data objects for each document 
  // we have in out "items" collection.
  var relData = mainData.docs.map(doc => doc.data());

  // This will go through each document in our collection and pull the raw data and 
  // put the raw data into the cards that the end user will see. 
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
