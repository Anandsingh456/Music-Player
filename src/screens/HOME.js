/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {songs} from '../MusicData';
import MusicListItems from '../common/MusicListItems';

const HOME = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Music App</Text>
      </View>
      <FlatList
        data={songs}
        renderItem={({item, index}) => {
          return <MusicListItems item={item} index={index} data={songs} />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: '#fff',
    width: '100%',
    elevation: 5,
    justifyContent: 'center',
  },
  logo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FF0D0D',
    marginLeft: 20,
  },
});

export default HOME;
