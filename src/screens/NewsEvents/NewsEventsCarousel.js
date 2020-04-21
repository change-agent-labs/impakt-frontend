import React from 'react'
import Carousel from 'react-native-snap-carousel'
import {
  Dimensions,
  Text,
  View,
  SafeAreaView
} from 'react-native'
import constants from 'constants/general'
const { width: screenWidth } = Dimensions.get('window')

import { useStore } from 'helpers/store.js'


const MyCarousel = () => {
  const { state, dispatch } = useStore()
  const events = state.events

  _renderItem = ({ item, index }) => {
    return (
      <View style={{
        backgroundColor: 'white',
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
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
        <Carousel
          layout={'default'}
          firstItem={state.nextEvent}
          ref={ref => {
            if (!state.eventCarouselRef) {
              dispatch({ type: 'setEventCarouselRef', payload: ref })
            }
          }}
          data={events}
          sliderWidth={screenWidth - (2 * constants.mainPadding)}
          itemWidth={screenWidth - (2 * constants.mainPadding) - 80}
          renderItem={this._renderItem}
        />
      </View>
    </SafeAreaView>
  );
}


export default MyCarousel