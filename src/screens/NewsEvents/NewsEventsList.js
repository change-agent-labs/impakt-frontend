import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useStore } from 'helpers/store.js'
import { CustomText, HeaderRegular, RegularText } from 'components/shared/basic/index.js'
import colors from 'constants/colors.js'

const ListItem = ({ event }) => (
  <View style={styles.listItem}>
    <View style={styles.row}>
      <View style={[styles.containerDate, styles.date]}>
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
  return (
    <View>
      <CustomText style={styles.date}>{event.date}</CustomText>
      <CustomText style={styles.date}>{event.time}</CustomText>
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
  },
  location: {
    fontFamily: 'Exo',
    fontSize: 14,
    marginTop: 0,
    marginBottom: 0,
  },
})

export default NewsEventsList
