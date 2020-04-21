import React from 'react'
import Carousel from 'react-native-snap-carousel'
import {
  Dimensions,
  SafeAreaView,
  Text,
  View,
} from 'react-native'

// helpers:
import { useStore } from 'helpers/store.js'

// constants:
import constants from 'constants/general'
const { width: screenWidth } = Dimensions.get('window')


const CarouselCard = ({ item, index }) => (
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

const NewsEventsCarousel = () => {
  const { state, dispatch } = useStore()
  const events = state.events

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
          itemWidth={screenWidth - (2 * constants.mainPadding) - 80} // 80 is to make previous & next event's cards visible 
          renderItem={CarouselCard}
        />
      </View>
    </SafeAreaView>
  );
}

export default NewsEventsCarousel
