import React from 'react'
import { StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import colors from 'constants/colors.js'
import constants from 'constants/general'

const LinearGradientWrapper = ({
  children,
  // define own below props rendering the component or be happy with default values:
  start = { x: 1, y: 1 },
  end = { x: 1, y: 0 },
  colorsArr = [colors.gradientDark,colors.black,colors.gradientDark, colors.brandDark],
  style = styles.linearGradient
}) => (
    <LinearGradient
      start={start}
      end={end}
      colors={colorsArr}
      style={style}>

      {children}
    </LinearGradient>
  );

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: constants.mainPadding,
    paddingRight: constants.mainPadding,
  },
});

export default LinearGradientWrapper;
