import React, { useState } from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import navigationOptions from 'helpers/navigationOptions.js'

import MainLayout from 'components/layouts/MainLayout.js'
import { RegularButton, RegularText, HeaderYellow } from 'components/shared/basic/index.js'

const ContactCoordinator = ({ navigation: { navigate } }) => {
  const [userContact, setUserContact] = useState(null)
  const [optionalMessage, setOptionalMessage] = useState(null)
  const [confirmationMessage, setConfirmationMessage] = useState(null)
  const [coordinatorName] = useState('Matt')
  const [wasSubmitted, setWasSubmitted] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  clearFieldsValues = () => {
    setIsValid(false)
    setUserContact(null)
    setOptionalMessage(null)
  }

  onChangeText = (val, type) => {
    setConfirmationMessage(null)
    if (type === 'contact') {
      wasSubmitted ? validateContact(val) : null
      setUserContact(val)
    } else if (type === 'message') {
      setOptionalMessage(val)
    }
  }

  validateContact = contact => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    const phoneRegex = /^[+]{0,1}[(]{0,1}[0-9]{1,3}[)]{0,1}[0-9]{6,12}$/g
    if (emailRegex.test(contact) || phoneRegex.test(contact)) {
      setIsValid(true)
      setErrorMessage(null)
    } else {
      setErrorMessage('Please write correct email or phone')
      setIsValid(false)
    }
    return
  }

  onSumbit = () => {
    setWasSubmitted(true)
    validateContact(userContact)
    if (isValid) {
      // TODO - send the message with user's contact to the coordinator
      setConfirmationMessage('Your request was sent to the coordinator')
      clearFieldsValues()
    } else {
      setErrorMessage('Please write correct email or phone')
    }
  }

  return (
    <MainLayout>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={styles.flex1}
        >
          <View style={styles.flex1}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.inner}>
                <RegularText>The coordinator in your area is:</RegularText>
                <RegularText> {coordinatorName}</RegularText>
                <RegularText>
                  How would you like them to contact you?
                </RegularText>
                <HeaderYellow>{errorMessage}</HeaderYellow>
                <TextInput
                  style={styles.textInput}
                  placeholder='emanil or phone number'
                  onChangeText={val => onChangeText(val, 'contact')}
                  value={userContact}
                />

                <TextInput
                  style={[styles.textArea, styles.textInput]}
                  multiline
                  numberOfLines={8}
                  onChangeText={val => onChangeText(val, 'message')}
                  value={optionalMessage}
                  editable
                  placeholder={`Optional message for ${coordinatorName}`}
                />
              </View>
            </TouchableWithoutFeedback>
            <RegularButton
              action={onSumbit}
              content='Submit'
              disabled={!userContact}
              style={styles.button}
            />
            <HeaderYellow>{confirmationMessage}</HeaderYellow>
            <View style={styles.flex1} />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </MainLayout>
  )
}

ContactCoordinator.navigationOptions = navigationOptions()

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: "flex-end",
  },
  textInput: {
    padding: 10,
    marginTop: 20,
    backgroundColor: '#fff',
  },
  error: {
    borderColor: '#ff0000',
    borderBottomColor: 'red'
  },
  textArea: {
    flexGrow: 1,
    maxHeight: 120,
  },
  button: {
    marginTop: 30,
  },
})

export default ContactCoordinator
