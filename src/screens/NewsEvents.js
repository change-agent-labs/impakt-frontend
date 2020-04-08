import React, { Component } from 'react';
import { Button, Container, Text } from 'native-base';
import {StyleSheet} from 'react-native';
import navigationOptions from 'helpers/navigationOptions.js'

class NewsEvents extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="this is profile screen"
        //onPress={() => navigate('Profile', {name: 'Jane'})}
      />
    );
  }
}

NewsEvents.navigationOptions = navigationOptions()

export default NewsEvents;
