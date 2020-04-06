import React, { useState } from 'react';
import { Picker, StyleSheet, View } from 'react-native';
import { useStore } from 'helpers/store.js'

import MainLayout from 'components/layouts/MainLayout.js'
import { RegularButton, RegularText, HeaderYellow } from 'components/shared/basic/index.js'

const ChooseRegion = ({ navigation: { navigate } }) => {
  const { dispatch } = useStore()
  const [selectedValue, setSelectedValue] = useState(false)
  const regions = [
    'dolnośląskie',
    'kujawsko-pomorskie',
    'lubelskie',
    'lubuskie',
    'łódzkie',
    'małopolskie',
    'mazowieckie',
    'opolskie',
    'podkarpackie',
    'podlaskie',
    'pomorskie',
    'śląskie',
    'świętokrzyskie',
    'warmińsko-mazurskie',
    'wielkopolskie',
    'zachodniopomorskie'
  ]

  const submit = () => {
    dispatch({ type: "setRegion", payload: selectedValue })
    navigate('Menu')
  }

  return (
    <MainLayout>
      <View style={styles.container}>
        <RegularText>
          Choose region
        </RegularText>
        <Picker
          // itemStyle={{ backgroundColor: 'red' }} 
          // itemStyle can be use for iOS. For android only default option is possible,
          // or it needs to be done with native android styles: 
          // https://stackoverflow.com/questions/40101451/styling-react-native-picker#44253332
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item key={'not selected'} label={'not selected'} value={false} />
          {regions.map(e => <Picker.Item key={e} label={e} value={e} />)}
        </Picker>
        <RegularButton
          action={submit}
          content="Confirm"
          disabled={!selectedValue}
          style={styles.button}
        />
        <HeaderYellow>We do not collect your data.</HeaderYellow>
      </View>
    </MainLayout>
  );
}

ChooseRegion.navigationOptions = {
  title: 'Choose Region',
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
  },
  container: {
    flex: 1,
    paddingTop: 40,
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff'
  },
});

export default ChooseRegion;
