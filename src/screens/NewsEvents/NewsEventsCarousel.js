import React from 'react'
import Carousel from 'react-native-snap-carousel'
import {
  Text,
  View,
  SafeAreaView
} from 'react-native'

import { useStore } from 'helpers/store.js'


const MyCarousel = () => {
  const { state } = useStore()
  const events = state.events

  _renderItem = ({ item, index }) => {
    return (
      <View style={{
        backgroundColor: 'floralwhite',
        borderRadius: 5,
        flex: 1,
        padding: 20,
        marginLeft: 5,
        marginRight: 5,
      }}>
        <Text style={{ fontSize: 20 }}>{item.title}</Text>
        <Text>{item.details}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'rebeccapurple', paddingTop: 50, }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
        <Carousel
          layout={'default'}
          firstItem={state.focusedEvent}
          data={events}
          sliderWidth={300}
          itemWidth={300}
          renderItem={this._renderItem}
        />
      </View>
    </SafeAreaView>
  );
}


export default MyCarousel