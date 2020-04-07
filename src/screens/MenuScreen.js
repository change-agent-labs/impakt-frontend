import React from 'react'
import { View, StyleSheet } from 'react-native'
import navigationOptions from 'helpers/navigationOptions.js'

import MainLayout from 'components/layouts/MainLayout.js'
import { ButtonListItem } from 'components/shared/basic/index.js'

const MenuScreen = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <MainLayout>
      <View style={styles.container}>
        <ButtonListItem
          action={() => navigate('GetInvolved', { name: 'Jane' })}
          content={'Get Involved'}
        />
        <ButtonListItem
          action={() => navigate('ConvinceFriendsInitial', { name: 'Jane' })}
          content={'Convince Friends'}
        />
        <ButtonListItem
          action={() => navigate('NewsEvents', { name: 'Jane' })}
          content={'News & Events'}
        />
        <ButtonListItem
          action={() => navigate('LocalChat', { name: 'Jane' })}
          content={'Local Chat'}
        />
      </View>
    </MainLayout>
  )
}

MenuScreen.navigationOptions = navigationOptions('', false)

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    padding: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
})

export default MenuScreen;


