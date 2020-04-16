import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useStore } from 'helpers/store.js'
import { ButtonListItem, HeaderRegular } from 'components/shared/basic/index.js'

const NewsEventsList = () => {
  const { state } = useStore()
  const events = state.events

  return (
    <View style={styles.container}>
      <HeaderRegular>news & events</HeaderRegular>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={styles.text}>how many events {events.length}</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 20,
  }
})

export default NewsEventsList
