import React, { useState } from 'react';
import sample from 'lodash/sample';
import without from 'lodash/without';
import { 
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import navigationOptions from 'helpers/navigationOptions.js'

import MainLayout from 'components/layouts/MainLayout.js'
import { HeaderRegular, DarkButton, YellowButton } from 'components/shared/basic/index.js'

const Messanger = (props) => {
  const topic = props.navigation.state.params.topic;
  const [value, onChangeText] = useState(topic.defaultMessages[0]);

  const changeDefaultMsg = () => onChangeText(
    sample(
      without(topic.defaultMessages, value)
    )
  )

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
                <HeaderRegular style={styles.header}>
                  {topic.title}
                </HeaderRegular>
                <TextInput
                  style={styles.textInput}
                  multiline
                  onChangeText={text => onChangeText(text)}
                  value={value}
                  maxLength={2000}
                />
              </View>
            </TouchableWithoutFeedback>
            <DarkButton
              action={changeDefaultMsg}
              content='Pick another message'
            />
            <YellowButton
              // action={}
              content='Send'
            />
            <View style={styles.flex1} />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </MainLayout>
  )
}

Messanger.navigationOptions = navigationOptions()

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
    maxHeight: 140,
  },
});

export default Messanger;
