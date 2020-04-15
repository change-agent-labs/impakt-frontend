import React from 'react'
import { Platform } from 'react-native';

import colors from 'constants/colors'
import constants from 'constants/general'
import { Ionicons } from '@expo/vector-icons'
import { useStore } from 'helpers/store.js'

const MenuIcon = ({ isMenuVisible }) => {
  const { state, dispatch } = useStore()
  if (!isMenuVisible) return null
  const iconColor = state.menuOpened ? colors.yellow : colors.white
  return (<Ionicons
    color={iconColor}
    name='ios-menu'
    size={32}
    onPress={() => dispatch({ type: 'toggleMenu' })}
    style={{ paddingRight: 20 }}
  />)
}

const navigationOptions = (title, isMenuVisible = true) => {
  return {
    title: title,
    headerBackTitle: ' ', // for iOS to avoid display headerBackTitle
    headerStyle: {
      backgroundColor: colors.brandDark,
      height: (Platform.OS === 'ios' ? (constants.navHeight - constants.iOsSystemBarHeight) : constants.navHeight),
      marginTop: (Platform.OS === 'ios' ? - constants.iOsSystemBarHeight : 0),
      shadowOpacity: 0,
      shadowOffset: {
        height: 0,
      },
      shadowRadius: 0,
      shadowColor: 'transparent',
      elevation: 0,
      borderBottomWidth: 0,
    },
    headerTintColor: colors.white,
    headerTitleStyle: {
      fontFamily: 'Exo100',
      textTransform: 'uppercase',
      fontWeight: '100',
    },
    headerRight: <MenuIcon isMenuVisible={isMenuVisible} />,
    // headerLeft: <WeMightWantOurCustomBackArrow /> // this might be helpful: https://github.com/react-navigation/react-navigation/issues/779
  }
}

export default navigationOptions