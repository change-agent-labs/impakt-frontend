import colors from 'constants/colors'

const navigationOptions = title => {
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
  }
}

export default navigationOptions