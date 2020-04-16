import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useStore } from 'helpers/store.js'
import { CustomText, HeaderRegular, RegularText } from 'components/shared/basic/index.js'

const ListItem = ({ event }) => (
  <View style={styles.listItem}>
    <View style={styles.row}>
      <View>
        <CustomText style={styles.date}>{event.date}</CustomText>
        <CustomText style={styles.date}>{event.time}</CustomText>
      </View>
      <View>
        <RegularText>{event.title}</RegularText>
        <View style={styles.row}>
          <RegularText>{event.city} </RegularText>
          <RegularText>({event.region})</RegularText>
        </View>
      </View>
    </View>
  </View>
)

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
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  listItem: {
    borderColor: 'blue',
    borderWidth: 1,
  },
  date: {
    fontSize: 12,
  }
})

export default NewsEventsList
