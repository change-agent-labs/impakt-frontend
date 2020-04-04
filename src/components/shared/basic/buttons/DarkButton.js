import React from 'react';
import CustomButton from './CustomButton.js';
import colors from 'constants/colors.js';

const DarkButton = ({ children, action, content, disabled, style }) => (
  <CustomButton
    action={action}
    color={colors.white}
    backgroundColor={colors.brandDark}
    content={content}
    disabled={disabled}
    style={style}
    textButtonStyle={{ fontFamily: "Exo200" }}
  >
    {children}
  </CustomButton>
)

export default DarkButton;