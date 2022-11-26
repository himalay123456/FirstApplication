/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {darkGreen} from '../constants/color';

const Field = props => {
  return (
    <View style={styles.inputBox}>
      <TextInput
        {...props}
        style={{
          borderRadius: 100,
          color: darkGreen,
          paddingHorizontal: 10,
          width: '85%',
          backgroundColor: 'rgb(220,220, 220)',
          marginVertical: 10,
        }}
        placeholderTextColor={darkGreen}
      />
      {props?.errorText?.length > 0 && (
        <View style={styles.errorBox}>
          <Text style={styles.error}>{props.errorText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontWeight: '500',
    fontSize: 14,
  },
  inputBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 40,
  },
});

export default Field;
