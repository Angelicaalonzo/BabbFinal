import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, AppNavigator } from 'react-navigation';
import TabBarIcon from '../screens/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Account from '../screens/Account';
import SocialMedia from '../screens/SocialMedia';
import Schedule from '../screens/Schedule';
import Sponsors from '../screens/Sponsors';
import Speakers from '../screens/Speakers';
import Directors from '../screens/Directors';
import EventMap from '../screens/EventMap';
import Lost from '../screens/Lost';


const HomeStack = createStackNavigator({
  HomeScreen: HomeScreen,
  Home: HomeScreen,
  Map: {screen: EventMap}, 
  Account: { screen: Account },
  Login: { screen: Login},
  Register: {screen: Register},
  SocialMedia: {screen: SocialMedia},
  Schedule: {screen: Schedule},
  Sponsors: {screen: Sponsors},
  Speakers: {screen: Speakers},
  Directors: {screen: Directors},
  Lost: {screen: Lost},
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
});
