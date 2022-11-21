import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Button} from '../custom';

const Header = ({children}) => {
  return (
    <View style={styles.mainBox}>
      <View style={styles.profileBox}>
        <View style={styles.textBox}>
          <Text style={styles.header1}>Welcome</Text>
          <Text style={styles.header2}>Himalay Shankar</Text>
        </View>
        <Image source={require('../assets/user.png')} style={styles.avatar} />
      </View>
      <View>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBox: {
    height: 200,
  },
  header1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'grey',
  },
  header2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'teal',
  },
  profileBox: {
    marginHorizontal: 20,
    marginVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: 80,
  },
  textBox: {
    flexDirection: 'column',
  },
  avatar: {
    height: 50,
    width: 50,
  },
});
export default Header;
