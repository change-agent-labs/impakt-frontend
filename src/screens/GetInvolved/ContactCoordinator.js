import React, { Component } from 'react';
import { Button, Container, Text , Form, Textarea, Item, Input, Label, Content} from 'native-base';
import {TextInput,StyleSheet, View,KeyboardAvoidingView,ScrollView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
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
class ContactCoordinator extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      inputValue:'',
      textAreaValue:'',
      inputStyle:styles.input,
      coordinatorsName:'Matt',     
    };
  }
  static navigationOptions = {
    title: '',
  };
  onChangeText = function(text, source){
    if (source==='input'){
      this.setState({inputValue:text});
      if(this.state.inputStyle==styles.error){
          this.setState({inputStyle:styles.input})
      }
    }else if(source==='textArea'){
      this.setState({textAreaValue:text}); 
    }
  }
 onSumbit =function(){
   //validate email adress or phone number
   //is email -> contains @
   //ins number -> contains oonly digits or +
   console.log('onSubmit')
   console.log(this.state.inputValue)

   if(this.state.inputValue===''){
     console.log('inputValue-==')
     this.setState({inputStyle:styles.error})
      console.log('inputStyle',this.state.inputStyle)
      console.log('errror',styles.error)
   }else{
      this.props.navigation.navigate('Confirmation', {name: 'Jane'})
   }
 }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView 
       contentContainerStyle = {{
        flexGrow: 1,
        borderColor:'green',
        borderWidth:3,
       }}
      >
      {/**https://docs.expo.io/versions/latest/react-native/keyboardavoidingview/ contentContainerStyle works only with behaviour position*/}
      <KeyboardAvoidingView  
       style = {styles.container1} 
        behavior="position" 
        enabled 
        contentContainerStyle = {{
        flexGrow: 1,
        borderColor:'red',
        borderWidth:3,
         justifyContent: 'space-around',
       }}
        >
     
      <Text style={styles.text}> The coordinator in your area is:
      </Text>
      <Text style={styles.text}> {this.state.coordinatorsName}
      </Text>
      <Text style={styles.text}>
          How would you like him to contact you? 
      </Text>
   
      <TextInput
       style={[this.state.inputStyle, styles.form]}
       placeholder='emanil or phone number'
       onChangeText={text => this.onChangeText(text, 'input')}
       value = {this.state.inputValue}
      />
    
      <TextInput
        style={[styles.textArea, styles.form]}
        multiline
        numberOfLines={2}
        onChangeText={text => this.onChangeText(text, 'textArea')}
        value = {this.state.textAreaValue}
        editable
        placeholder={`Optional message for ${this.state.coordinatorsName}`} 
      />
      
      {/**   <Textarea style={styles.input} bordered rowSpan={2} placeholder="email or phone number" />
        <Textarea   style={styles.textarea} bordered rowSpan={3} />*/}
      <Button block  large   style={styles.button} onPress={() => this.onSumbit()}>  
        <Text  >Submit</Text>
      </Button>
     
     </KeyboardAvoidingView>
     </ScrollView>  
     
    );
  }
}

const styles = StyleSheet.create({ 
  form:{
    borderWidth:1,
    padding:10,
    borderColor:'lightgray',
    borderBottomColor:'black'
  },
  error:{
    borderColor:'#ff0000',
    borderBottomColor:'red'
  },
  input:{
    padding:5,
    fontSize: 30,
  },
  textArea:{
    fontSize: 25,
  },
  text:{
    textTransform:'uppercase',
    textAlign:'center',
    padding:10,
  }, 
  button:{
     marginTop: 10,
  },
  container1: {
    flexGrow: 1,
    borderColor:'blue',
    borderWidth:3,
    //alignItems: 'center',
  },
});
export default ContactCoordinator;
