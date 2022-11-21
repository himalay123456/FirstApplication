/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {Background, Button} from '../../custom';
import {darkGreen, green} from '../../constants/color';

const Home = props => {
  return (
    <Background>
      <View style={{position: 'absolute', top: 200, left: 20}}>
        <Text style={{color: 'white', fontSize: 64}}>Let's Crack</Text>
        <Button
          bgColor={green}
          textColor="white"
          btnLabel="Login"
          Press={() => props.navigation.navigate('Login')}
        />
        <Button
          bgColor="white"
          textColor={darkGreen}
          btnLabel="Signup"
          Press={() => props.navigation.navigate('Signup')}
        />
      </View>
    </Background>
  );
};

export default Home;
