import React, { useState } from 'react';
import { Picker, Platform, StyleSheet, View } from 'react-native';
import { useStore } from 'helpers/store.js'

import MainLayout from 'components/layouts/MainLayout.js'
import { RegularButton, HeaderYellow } from 'components/shared/basic/index.js'
import navigationOptions from 'helpers/navigationOptions.js'
import colors from 'constants/colors'

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
    navigate('MenuScreen')
  }

  return (
    <MainLayout>
      <View style={styles.container}>
        <Picker
          selectedValue={selectedValue}
          style={Platform.OS === 'android' ? styles.picker : {}}
          itemStyle={Platform.OS === 'ios' ? { backgroundColor: '#fff' } : {}}
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

ChooseRegion.navigationOptions = () => navigationOptions('Choose region', false)

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
    backgroundColor: colors.white
  },
});

export default ChooseRegion;
