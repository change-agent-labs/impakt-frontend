import React from 'react'
import colors from 'constants/colors'
import { Ionicons } from '@expo/vector-icons'

const MenuIcon = ({menu}) => {
  if (!menu) return null
  return (<Ionicons
    color={colors.white}
    name='ios-menu'
    size={32}
    onPress={() => alert('This is a button!')}
    style={{ paddingRight: 20 }}
  />)
}

const navigationOptions = (title, menu = true) => {
  return {
    title: title,
    headerStyle: {
      backgroundColor: colors.brandDark,
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
    headerRight: <MenuIcon menu={menu} />,
  }
}

export default navigationOptions