import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import navigationOptions from 'helpers/navigationOptions.js'
import { useStore } from 'helpers/store.js'
import MainLayout from 'components/layouts/MainLayout.js'


const NewsEvents = ({ navigation: { navigate } }) => {
  const { state } = useStore()
  return (
    <MainLayout>
      <View style={styles.container1}>
      </View>
      <View style={styles.container2}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        </ScrollView>
      </View>
    </MainLayout>
  )
}

NewsEvents.navigationOptions = navigationOptions()

const styles = StyleSheet.create({
  container1: {
    flex: 2,
    borderColor: 'red',
    borderWidth: 1,
    justifyContent: 'flex-start',
  },
  container2: {
    flex: 5,
    marginBottom: 20,
    padding: 10,
    borderColor: 'green',
    borderWidth: 1,
    justifyContent: 'flex-start',
  },
  info: {
  },
  infoBig: {
    fontSize: 24,
  },
})

export default NewsEvents
