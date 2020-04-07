import React, { useState } from 'react';
import sample from 'lodash/sample';
import without from 'lodash/without';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TextInput, View } from 'react-native';
// import { Header } from 'react-navigation-stack';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
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
      <KeyboardAvoidingView behavior={Platform.Os == "ios" ? "padding" : "height"} enabled style={styles.container}>
        <ScrollView>
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
          <DarkButton
            action={changeDefaultMsg}
            content='Pick another message'
          />
          <YellowButton
            // action={}
            content='Send'
          />
        </ScrollView>
      </KeyboardAvoidingView>

      {/* <KeyboardAvoidingView keyboardVerticalOffset={Header.HEIGHT + 20} style={styles.container} behavior="padding" keyboardVerticalOffset={20} > */}
      {/* <KeyboardAwareScrollView extraHeight={180} style={{ borderWidth: 2, borderColor: 'red' }}>
          <View style={{ borderWidth: 2, borderColor: 'blue', height: 800 }}>
            <Text style={styles.text}>
              Let's convince your friends who value:
            </Text>
            <Text style={styles.text}>
              {topic.title}
            </Text>
            <TextInput
              style={styles.textInput}
              multiline
              onChangeText={text => onChangeText(text)}
              value={value}
              maxLength={2000}
            />
            <Button block light full large>
              <Text>Let's do it</Text>
            </Button>
            <Button block light full large>
              <Text>Let's do it</Text>
            </Button>
            <Button block light full large>
              <Text>Let's do it</Text>
            </Button>
          </View>
        </KeyboardAwareScrollView> */}
      {/* </KeyboardAvoidingView> */}
    </MainLayout>
  )
}

Messanger.navigationOptions = navigationOptions()

const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  },
  header: {
    marginTop: 20,
  },
  textInput: {
    flexGrow: 1,
    marginTop: 20,
    marginBottom: 40,
    padding: 20,
    fontSize: 16,
    backgroundColor: '#ffffff',
    textAlignVertical: 'top'
  },
});

export default Messanger;
