import React, { Component } from 'react';
import { Platform } from 'react-native';
import * as Font from 'expo-font';
import MenuScreen from './src/screens/MenuScreen';
import ContactCoordinator from './src/screens/ContactCoordinator';
import ConvinceFriends from './src/screens/ConvinceFriends';
import GetInvolved from './src/screens/GetInvolved';
import NewsEvents from './src/screens/NewsEvents';
import LocalChat from './src/screens/LocalChat';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Menu: { screen: MenuScreen },
  GetInvolved: { screen: GetInvolved },
  ConvinceFriends: { screen: ConvinceFriends },
  NewsEvents: { screen: NewsEvents },
  LocalChat: { screen: LocalChat },
  ContactCoordinator: { screen: ContactCoordinator },
});

const AppWithNav = createAppContainer(MainNavigator);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require('./assets/Fonts/Roboto.ttf'),
      Roboto_medium: require('./assets/Fonts/Roboto_medium.ttf'),
      Ionicons: require('./assets/Fonts/Ionicons.ttf'),
    })
    this.setState({isReady: true})
  }
  render() {
    return this.state.isReady ? (<AppWithNav />) : null
  }
}
