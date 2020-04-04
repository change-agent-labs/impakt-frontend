import React from 'react';
import CustomButton from './CustomButton.js';

const RegularButton = ({ children, action, content, disabled, style }) => (
  <CustomButton
    action={action}
    content={content}
    disabled={disabled}
    style={style}
  >
    {children}
  </CustomButton>
)

export default RegularButton;