import React from 'react'
import CustomText from './CustomText.js'
import colors from 'constants/colors.js'

const ErrorMessage = ({ children, style }) => (
  <CustomText style={{ ...additionalStyles, ...style }}>
    {children}
  </CustomText>
)

const additionalStyles = {
    fontFamily: "Exo700",
    color: colors.alarmRed,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
}

export default ErrorMessage
