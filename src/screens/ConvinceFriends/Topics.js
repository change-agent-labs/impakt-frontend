import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import navigationOptions from 'helpers/navigationOptions.js'

import MainLayout from 'components/layouts/MainLayout.js'
import { ButtonListItem, LargeText } from 'components/shared/basic/index.js'


const TOPICS_DATA = [
  {
    title: 'Quality education for children',
    defaultMessages: ['default message for Quality education for children', 'another default message', 'msg 3', 'msg 4', 'msg 5', 'msg 6']
  },
  {
    title: 'Rising costs of school supplies',
    defaultMessages: ['default message for Rising costs of school supplies', 'another default message', 'msg 3', 'msg 4', 'msg 5', 'msg 6']
  },
  {
    title: 'Opposing the current government',
    defaultMessages: ['default message for Opposing the current government', 'another default message', 'msg 3', 'msg 4', 'msg 5', 'msg 6']
  },
  {
    title: 'Women rights',
    defaultMessages: ['default message for Women rights', 'another default message', 'msg 3', 'msg 4', 'msg 5', 'msg 6']
  },
  {
    title: 'Global warming',
    defaultMessages: ['default message for Global warming', 'another default message', 'msg 3', 'msg 4', 'msg 5', 'msg 6']
  },
  {
    title: 'Topic 1',
    defaultMessages: ['default message for Topic 1', 'another default message', 'msg 3', 'msg 4', 'msg 5', 'msg 6']
  },
  {
    title: 'Topic 2',
    defaultMessages: ['default message for Topic 2', 'another', 'msg 3', 'msg 4', 'msg 5', 'msg 6']
  },
  {
    title: 'Topic 3',
    defaultMessages: ['default message for Topic 3', 'another', 'msg 3', 'msg 4', 'msg 5', 'msg 6']
  },
  {
    title: 'Topic 4',
    defaultMessages: ['default message for Topic 4', 'another', 'msg 3', 'msg 4', 'msg 5', 'msg 6']
  },
]

const Item = ({ title, goToMessanger }) => (
  <ButtonListItem action={goToMessanger} content={title} />
)

const Topics = ({ navigation: { navigate } }) => (
  <MainLayout>
    <LargeText style={styles.header}>
      Let's convince your friends, who value:
    </LargeText>
    <FlatList style={styles.listContainer}
      data={TOPICS_DATA}
      renderItem={({ item }) => (
        <Item
          title={item.title}
          goToMessanger={
            () => navigate('ConvinceFriendsMessanger', { topic: item })
          }
        />
      )}
      keyExtractor={item => item.title}
    />
  </MainLayout>
);

Topics.navigationOptions = navigationOptions()

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    marginBottom: 20,
  },
  listContainer: {
    backgroundColor: 'transparent',
  },
  listItem: {
    backgroundColor: '#ffffff',
    padding: 20,
    margin: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default Topics;
