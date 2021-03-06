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

import { HeaderRegular, HeaderYellow, ButtonListItem } from 'components/shared/basic/index.js'

const SetNickName = ({ setNickname }) => {
  const [value, setValue] = useState(null)

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={styles.flex1}
      >
        <View style={styles.flex1}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
              <HeaderRegular style={styles.header}>
                Chose your nickname:
                </HeaderRegular>
              <TextInput
                style={styles.textInput}
                onChangeText={text => setValue(text)}
                value={value}
                maxLength={20}
              />
            </View>
          </TouchableWithoutFeedback>
          <ButtonListItem
            action={() => setNickname(value)}
            content={'enter chat'}
            theme={'dark'}
          />
          <HeaderRegular>IMPAKT does not save your nickname for safety reasons.</HeaderRegular>
          <HeaderRegular>If someone confiscates your phone, we don't want them to learn what you did in the app.</HeaderRegular>
          <HeaderRegular>It will ask you for a nickname every time you reopen the chat.</HeaderRegular>
          <View style={styles.flex1} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

SetNickName.navigationOptions = navigationOptions()

const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  },
  flex1: { flex: 1 },
  header: {
    marginTop: 20,
  },
  inner: {
    flex: 1,
    justifyContent: "flex-end",
  },
  textInput: {
    flexGrow: 1,
    marginTop: 20,
    marginBottom: 40,
    padding: 20,
    fontSize: 16,
    backgroundColor: '#ffffff',
    textAlignVertical: 'top',
    maxHeight: 60,
  },
})

export default SetNickName
