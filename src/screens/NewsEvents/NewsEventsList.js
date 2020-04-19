import React from 'react'
import { format, formatDistance, compareAsc } from 'date-fns'

import { useStore } from 'helpers/store.js'

import { FlatList, StyleSheet, View } from 'react-native'
import { CustomText, HeaderRegular, RegularText } from 'components/shared/basic/index.js'

import colors from 'constants/colors.js'

const ListItem = ({ event }) => (
  <View style={styles.listItem}>
    <View style={styles.row}>
      <View style={styles.containerDate}>
        <Time event={event} />
      </View>
      <View style={styles.containerTitle}>
        <RegularText>{event.title}</RegularText>
      </View>
    </View>
    <View style={[styles.row, styles.containerLocation]}>
      <RegularText style={styles.location}>{event.city} </RegularText>
      <RegularText style={styles.location}>({event.region})</RegularText>
    </View>
  </View>
)

const Time = ({ event }) => {
  const rawDate = new Date(event.date)
  const formatDate = format(rawDate, 'MM.dd')
  const formatTime = format(rawDate, 'kk:mm')
  return (
    <View>
      <CustomText style={styles.date}>{formatDate}</CustomText>
      <CustomText style={styles.date}>{formatTime}</CustomText>
    </View>
  )
}

const NewsEventsList = () => {
  const { state } = useStore()
  const events = state.events

  return (
    <View style={styles.container}>
      <HeaderRegular>news & events</HeaderRegular>
      <FlatList
        data={events}
        renderItem={({ item }) => <ListItem event={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: colors.brandLight,
    borderWidth: 1,
    marginBottom: 10,
  },
  container: {
    flex: 1,
  },
  containerDate: {
    flex: 1,
    justifyContent: 'center',
  },
  containerTitle: {
    flex: 5,
  },
  containerLocation: {
    justifyContent: 'center',
    backgroundColor: colors.brandLight,
  },
  row: {
    flexDirection: 'row',
  },
  date: {
    fontSize: 12,
    marginTop: 0,
    marginBottom: 5,
    fontFamily: 'Exo',
  },
  location: {
    fontFamily: 'Exo',
    fontSize: 14,
    marginTop: 0,
    marginBottom: 0,
  },
})

export default NewsEventsList
