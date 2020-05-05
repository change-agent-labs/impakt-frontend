import React from 'react'
import { format } from 'date-fns'
import { FlatList, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'

// helpers:
import { useStore } from 'helpers/store.js'

// components:
import { CustomText, HeaderRegular, RegularText } from 'components/shared/basic/index.js'

// constants:
import colors from 'constants/colors.js'

const ListItem = ({ event, index }) => {
  const { dispatch } = useStore()
  return (
    <TouchableWithoutFeedback
      style={styles.listItem}
      onPress={
        () => dispatch({
          type: 'scrollToSlide',
          payload: index
        })
      }>
      <View>
        <View style={styles.row}>
          <View style={styles.containerDate}>
            <Time event={event} />
          </View>
          <View style={styles.containerTitle}>
            <RegularText>{event.title}</RegularText>
          </View>
        </View>
        <View style={[styles.row, styles.containerLocation]}>
          <RegularText style={styles.location}>{event.content} </RegularText>
          {/* <RegularText style={styles.location}>{event.city} </RegularText> */}
          {/* <RegularText style={styles.location}>({event.region})</RegularText> */}
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const Time = ({ event }) => {
  // const rawDate = new Date(event.date)
  const rawDate = new Date(event.createdAt)
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
        renderItem={({ item, index }) => <ListItem event={item} index={index} />}
        keyExtractor={(item) => item.createdAt}
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
