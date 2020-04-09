import React from 'react';
import CustomButton from './CustomButton.js';
import colors from 'constants/colors.js';

const ButtonListItem = ({ children, action, content, disabled, style, theme }) => (
  <CustomButton
    action={action}
    color={colors.white}
    backgroundColor={(theme === 'dark' ? colors.brandDark : colors.brandLight)}
    borderColor={colors.brandLight}
    borderWidth={1}
    content={content}
    disabled={disabled}
    style={style}
    key={content}
    textButtonStyle={{ fontFamily: "Exo200" }}
  >
    {children}
  </CustomButton>
)

export default ButtonListItem;