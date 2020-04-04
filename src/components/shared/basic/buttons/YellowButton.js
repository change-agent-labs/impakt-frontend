import React from 'react';
import CustomButton from './CustomButton.js';
import colors from 'constants/colors.js';

const YellowButton = ({ children, action, content, disabled, style }) => (
  <CustomButton
    action={action}
    color={colors.brandLight}
    backgroundColor={colors.yellow}
    content={content}
    disabled={disabled}
    style={style}
    textButtonStyle={{ fontFamily: "Exo800" }}
  >
    {children}
  </CustomButton>
)

export default YellowButton;