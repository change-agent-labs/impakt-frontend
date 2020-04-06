import React, { Component } from 'react';
import * as Font from 'expo-font';
import { StoreProvider } from './src/helpers/store.js';
import ChooseRegion from './src/screens/ChooseRegion';
import MenuScreen from './src/screens/MenuScreen';
import ContactCoordinator from './src/screens/ContactCoordinator';
import ConvinceFriendsInitial from './src/screens/ConvinceFriends/Initial';
import ConvinceFriendsTopics from './src/screens/ConvinceFriends/Topics';
import ConvinceFriendsMessanger from './src/screens/ConvinceFriends/Messanger';
import GetInvolved from './src/screens/GetInvolved';
import NewsEvents from './src/screens/NewsEvents';
import LocalChat from './src/screens/LocalChat';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  ChooseRegion: { screen: ChooseRegion },
  Menu: { screen: MenuScreen },
  GetInvolved: { screen: GetInvolved },
  ConvinceFriendsInitial: { screen: ConvinceFriendsInitial },
  ConvinceFriendsTopics: { screen: ConvinceFriendsTopics },
  ConvinceFriendsMessanger: { screen: ConvinceFriendsMessanger },
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
      // headers font:
      Exo: require('./assets/fonts/exo-2-400.ttf'),
      Exo700: require('./assets/fonts/exo-2-700.ttf'),
      Exo800: require('./assets/fonts/exo-2-800.ttf'),
      // regular text font:
      Exo100: require('./assets/fonts/exo-2-100.ttf'),
      Exo200: require('./assets/fonts/exo-2-200.ttf'),
      Roboto: require('./assets/fonts/Roboto.ttf'),
      Roboto_medium: require('./assets/fonts/Roboto_medium.ttf'),
      // logo font:
      TerminaMedium: require('./assets/fonts/Termina-Medium.otf'),
      TerminaLight: require('./assets/fonts/Termina-Light.otf'),
      // icon font:
      Ionicons: require('./assets/fonts/Ionicons.ttf'),
    })
    this.setState({ isReady: true })
  }
  render() {
    if (!this.state.isReady) return null // TODO: loading screen
  
    return (
      <StoreProvider>
        <AppWithNav />
      </StoreProvider>
    )
  }
}
