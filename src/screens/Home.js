import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import Header from '../custom/Header';
const Home = props => {
  return (
    <Header>
      <View style={styles.selectBox}>
        <TouchableOpacity onPress={() => props.navigation.navigate('AddGoal')}>
          <Image
            source={require('../assets/plus.png')}
            style={styles.goalAvatar}
          />
        </TouchableOpacity>
        <Text style={styles.header2}>Add Your Goal</Text>
      </View>
    </Header>
  );
};

const styles = StyleSheet.create({
  header2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'teal',
  },
  selectBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: 500,
  },
  goalAvatar: {
    height: 100,
    width: 100,
    marginBottom: 20,
  },
});
export default Home;
