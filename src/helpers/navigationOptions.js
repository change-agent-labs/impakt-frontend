import React from 'react'
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
    headerStyle: {
      backgroundColor: colors.brandDark,
      height: constants.navHeight,
      shadowOpacity: 0,
      shadowOffset: {
        height: 0,
      },
      shadowRadius: 0,
      elevation: 0,
    },
    headerTintColor: colors.white,
    headerTitleStyle: {
      fontFamily: 'Exo100',
      textTransform: 'uppercase',
      fontWeight: '100',
    },
    headerRight: <MenuIcon isMenuVisible={isMenuVisible} />,
  }
}

export default navigationOptions