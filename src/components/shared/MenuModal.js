import React, { useState } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { HeaderYellow } from 'components/shared/basic/index.js'
import colors from 'constants/colors.js'
import constants from 'constants/general.js'
import { useStore } from 'helpers/store.js'
import * as RootNavigation from 'helpers/rootNavigation.js'

const goToScreen = (name, dispatch, params) => {
  dispatch({ type: 'toggleMenu' })
  RootNavigation.navigate(name, params)
}

const MenuItem = ({ title, screenName, params = {} }) => {
  const { dispatch } = useStore()
  return <TouchableHighlight
    onPress={() => { goToScreen(screenName, dispatch, params) }}
  >
    <HeaderYellow style={styles.menuItem}>{title}</HeaderYellow>
  </TouchableHighlight>
}

const MenuModal = () => {
  const { state, dispatch } = useStore()
  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={state.menuOpened}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}
    >
      <TouchableWithoutFeedback
        onPress={() => dispatch({ type: 'toggleMenu' })}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <MenuItem title='Change Region' screenName='ChooseRegion' params={{ changeCurrentRegion: true }} />
            <MenuItem title='Get Involved' screenName='GetInvolved' />
            <MenuItem title='Convince Friends' screenName='ConvinceFriendsTopics' />
            <MenuItem title='News & Events' screenName='NewsEvents' />
            <MenuItem title='Local Chat' screenName='LocalChat' params={{ nickname: null }} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: constants.navHeight,
    backgroundColor: colors.dimmed,
  },
  modalView: {
    marginTop: 2,
    backgroundColor: colors.brandDark,
    padding: 4,
    alignItems: 'center',
    shadowColor: '#000',
    marginLeft: '40%',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },
  menuItem: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default MenuModal;
