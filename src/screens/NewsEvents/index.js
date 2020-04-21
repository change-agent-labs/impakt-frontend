import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import navigationOptions from 'helpers/navigationOptions.js'
import { useStore } from 'helpers/store.js'
// import { ButtonListItem, HeaderRegular } from 'components/shared/basic/index.js'
import MainLayout from 'components/layouts/MainLayout.js'
import Carousel from './NewsEventsCarousel'
import NewsEventsList from './NewsEventsList.js'


const NewsEvents = ({ navigation: { navigate } }) => {
  const { state } = useStore()
  return (
    <MainLayout>
      <View style={styles.container1}>
        <Carousel />
      </View>
      <View style={styles.container2}>
        <NewsEventsList />
      </View>
    </MainLayout>
  )
}

NewsEvents.navigationOptions = navigationOptions()

const styles = StyleSheet.create({
  container1: {
    flex: 2,
    justifyContent: 'flex-start',
  },
  container2: {
    flex: 5,
    marginBottom: 20,
    padding: 10,
    justifyContent: 'flex-start',
  },
  info: {
  },
  infoBig: {
    fontSize: 24,
  },
})

export default NewsEvents
