/* eslint-disable prettier/prettier */
import {View, Text, Touchable, Dimensions, Image} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
const {height, width} = Dimensions.get('window');

const MusicListItems = ({item, index, data}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[
        styles.conatainer,
        {marginBottom: index == data.length - 1 ? 30 : 0},
      ]}
      onPress={() => {
        navigation.navigate('MUSIC', {
          data: item,
          index: index,
        });
      }}>
      <Image source={item.artwork} style={styles.songsImage} />
      <View style={styles.nameView}>
        <Text style={styles.name}>{item.title}</Text>
        <Text style={styles.name}>{item.artist}</Text>
      </View>
      <TouchableOpacity>
        <Image source={require('../images/play.png')} style={styles.play} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  conatainer: {
    width: width - 20,
    height: 100,
    elevation: 5,
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  songsImage: {
    width: 100,
    height: 90,
    borderRadius: 10,
    marginLeft: 2,
  },
  nameView: {
    paddingLeft: 15,
    width: '50%',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  play: {
    width: 30,
    height: 30,
  },
});

export default MusicListItems;
