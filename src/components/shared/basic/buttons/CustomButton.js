import React from 'react';
import { TouchableOpacity } from 'react-native';
import colors from 'constants/colors.js';
import CustomText from 'components/shared/basic/CustomText.js';

const CustomButton = ({
  action,
  content,
  disabled,
  textButtonStyle = {},
  children,
  backgroundColor = colors.brandLight,
  borderColor = colors.brandLight,
  borderWidth = 0,
  color = colors.white,
  opacity = 1,
  fontSize = 20,
  fontFamily = "Exo100",
  textAlign = 'center',
  marginTop = 10,
  marginBottom = 10,
  style,
}) => {
  if (disabled) {
    opacity = 0.4
  }
  return (
    <TouchableOpacity style={{
      backgroundColor,
      borderColor,
      borderWidth,
      color,
      opacity,
      fontFamily,
      fontSize,
      marginTop,
      marginBottom,
      textAlign,
      content,
      ...style
    }} onPress={action} disabled={disabled}>
      <CustomText style={{ color, ...customTextStyles, ...textButtonStyle }}>{content}</CustomText>
      {children}
    </TouchableOpacity>
  )
}

const customTextStyles = {
  fontFamily: "Exo700",
  fontSize: 16,
  marginBottom: 20,
  marginTop: 20,
  textTransform: 'uppercase',
}

export default CustomButton;