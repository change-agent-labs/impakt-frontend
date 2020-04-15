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
  const [userEmail, setUserEmail] = useState(null)
  const [optionalMessage, setOptionalMessage] = useState(null)
  const [confirmationMessage, setConfirmationMessage] = useState(null)
  const [coordinatorName] = useState('Matt')

  const onChangeText = (val, type) => {
    setConfirmationMessage(null)
    if (type === 'email') {
      setUserEmail(val)
    } else if (type === 'message') {
      setOptionalMessage(val)
    }
  }

  const onSumbit = () => {
    // TODO - send the message with email
    setConfirmationMessage('Your request was sent to the coordinator')
    setUserEmail(null)
    setOptionalMessage(null)
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
                <TextInput
                  style={styles.textInput}
                  placeholder='emanil or phone number'
                  onChangeText={val => onChangeText(val, 'email')}
                  value={userEmail}
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
              disabled={!userEmail}
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
