/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Button, Field, Header} from '../custom';
import {darkGreen} from '../constants/color';

const AddGoal = props => {
  return (
    <Header>
      <View style={{alignItems: 'center', width: 390}}>
        <Text
          style={{
            color: 'teal',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Add Goal
        </Text>
        <Text
          style={{
            color: 'grey',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create a new goal
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: 'center',
          }}>
          <Field placeholder="Goal Name" />
          <Field placeholder="Description" />
          <Button
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Add Goal"
            Press={() => {
              alert('Goal added');
              props.navigation.navigate('Dashboard');
            }}
          />
        </View>
      </View>
    </Header>
  );
};

export default AddGoal;
