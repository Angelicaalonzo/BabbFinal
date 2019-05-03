import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { List, ListItem, Left, Body, Right } from 'native-base';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

// The majority of this code was borrowed and modified from https://github.com/wix/react-native-calendars

export default class Schedule extends React.Component {
  static navigationOptions = {
    title: 'Event Calendar and Events',
  };
  render() {
    return (
      <View style={styles.container}>
        <Calendar
          // This sets the selectable dates for only the year of 2019
          minDate={'2019-01-01'}
          maxDate={'2019-12-31'}
          // Website documentation: Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {console.log('selected day', day)}}
          // Website documentation: Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => {console.log('selected day', day)}}
          // Website documentation: Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'MMMM yyyy'}
          // Website documentation: Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {console.log('month changed', month)}}
          // Website documentation: Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // Website documentation: If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // Website documentation: If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // HWebsite documentation: andler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={substractMonth => substractMonth()}
          // Website documentation: Handler which gets executed when press arrow icon left. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
          markedDates={{
            // These are the dates for the convention
            '2019-11-06': {marked: true},
            '2019-11-07': {marked: true},
            '2019-11-08': {marked: true},
            '2019-11-09': {marked: true}
          }}
        />       
        <List>
          {/* This needs to be updated to fit the rest of the schedule */}
          <ListItem thumbnail>
            <Left>
              <Text>November 6 - 6:00pm </Text>
            </Left>
            <Right>
              <Text>Light Reception & Registration</Text>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Text>November 7 - 7:00am to 4:30pm </Text>
            </Left>
            <Right>
              <Text>Registration</Text>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Text>November 7 - 7:30am </Text>
            </Left>
            <Right>
              <Text>Breakfast</Text>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Text>November 7 - 8:30am to 12:00pm </Text>
            </Left>
            <Right>
              <Text>Workshops & Sessions</Text>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Text>November 7 - 12:00pm </Text>
            </Left>
            <Right>
              <Text>Industry Keynote Lunch</Text>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Text>November 7 - 2:00pm to 4:30pm </Text>
            </Left>
            <Right>
              <Text>Workshops & Sessions</Text>
            </Right>
          </ListItem>
        </List>
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