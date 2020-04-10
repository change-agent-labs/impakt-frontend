import React, { useState } from 'react'
import navigationOptions from 'helpers/navigationOptions.js'

import { Button, Container, Text, Form, Textarea, Item, Input, Label, Content } from 'native-base';
import { TextInput, StyleSheet, View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { Header } from 'react-navigation-stack';


function UselessTextInput(props) {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
    />
  );
}
//https://medium.com/@peterpme/taming-react-natives-scrollview-with-flex-144e6ff76c08
const ContactCoordinator = ({ navigation: { navigate } }) => {
  const [inputValue, setInputValue] = useState('')
  const [textAreaValue, setTextAreaValue] = useState('')
  const [inputStyle, setInputStyle] = useState(styles.input)
  const [coordinatorName] = useState('Matt')

  onChangeText = function (text, source) {
    if (source === 'input') {
      setInputValue(text)
      if (inputStyle == styles.error) {
        setInputStyle(styles.input)
      }
    } else if (source === 'textArea') {
      setTextAreaValue(text)
    }
  }
  onSumbit = function () {
    //validate email adress or phone number
    //is email -> contains @
    //ins number -> contains oonly digits or +
    console.log('onSubmit')
    console.log(inputValue)

    if (inputValue === '') {
      console.log('inputValue-==')
      setInputStyle(styles.error)
      console.log('inputStyle', inputStyle)
      console.log('styles.errror', styles.error)
    } else {
      navigate('MenuScreen') //('Confirmation')
    }
  }
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        borderColor: 'green',
        borderWidth: 3,
      }}
    >
      {/**https://docs.expo.io/versions/latest/react-native/keyboardavoidingview/ contentContainerStyle works only with behaviour position*/}
      <KeyboardAvoidingView
        style={styles.container1}
        behavior="position"
        enabled
        contentContainerStyle={{
          flexGrow: 1,
          borderColor: 'red',
          borderWidth: 3,
          justifyContent: 'space-around',
        }}
      >

        <Text style={styles.text}> The coordinator in your area is:
      </Text>
        <Text style={styles.text}> {coordinatorName}
        </Text>
        <Text style={styles.text}>
          How would you like him to contact you?
      </Text>

        <TextInput
          style={[inputStyle, styles.form]}
          placeholder='emanil or phone number'
          onChangeText={text => onChangeText(text, 'input')}
          value={inputValue}
        />

        <TextInput
          style={[styles.textArea, styles.form]}
          multiline
          numberOfLines={2}
          onChangeText={text => onChangeText(text, 'textArea')}
          value={textAreaValue}
          editable
          placeholder={`Optional message for ${coordinatorName}`}
        />

        {/**   <Textarea style={styles.input} bordered rowSpan={2} placeholder="email or phone number" />
        <Textarea   style={styles.textarea} bordered rowSpan={3} />*/}
        <Button block large style={styles.button} onPress={() => onSumbit()}>
          <Text>Submit</Text>
        </Button>

      </KeyboardAvoidingView>
    </ScrollView>

  );
}

ContactCoordinator.navigationOptions = navigationOptions()

const styles = StyleSheet.create({
  form: {
    borderWidth: 1,
    padding: 10,
    borderColor: 'lightgray',
    borderBottomColor: 'black'
  },
  error: {
    borderColor: '#ff0000',
    borderBottomColor: 'red'
  },
  input: {
    padding: 5,
    fontSize: 30,
  },
  textArea: {
    fontSize: 25,
  },
  text: {
    textTransform: 'uppercase',
    textAlign: 'center',
    padding: 10,
  },
  button: {
    marginTop: 10,
  },
  container1: {
    flexGrow: 1,
    borderColor: 'blue',
    borderWidth: 3,
    //alignItems: 'center',
  },
})

export default ContactCoordinator;
