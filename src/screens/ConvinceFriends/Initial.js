import React from 'react';
import { StyleSheet, View } from 'react-native';

import MainLayout from 'components/layouts/MainLayout.js'
import { RegularButton, RegularText, HeaderYellow } from 'components/shared/basic/index.js'
import navigationOptions from 'helpers/navigationOptions.js'

const Initial = ({ navigation: { navigate } }) => (
  <MainLayout>
    <View style={styles.container}>
      <RegularText>
        No one can talk to your friends better than YOU.
      </RegularText>
      <RegularText>
        You know what's important to them.
      </RegularText>
      <RegularText style={{ marginBottom: 40 }}>
        Let's convince them to support our common cause TOGETHER
      </RegularText>
      <RegularButton
        action={() => navigate('ConvinceFriendsTopics')}
        content="Let's do it"
        style={styles.button}
      />
      <HeaderYellow>We do not collect your data.</HeaderYellow>
      <HeaderYellow>What you do here is between you and your friends.</HeaderYellow>
    </View>
  </MainLayout>
);

Initial.navigationOptions = navigationOptions('Convince Friends')

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
  },
  container: {
    flex: 1,
    paddingTop: 40,
  },
});

export default Initial;
