/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Btn({
  bgColor,
  btnLabel,
  textColor,
  Press,
  customWidth,
  customFontSize,
}) {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: 'center',
        width: customWidth ? customWidth : 350,
        paddingVertical: 10,
        marginVertical: 10,
      }}>
      <Text
        style={{
          color: textColor,
          fontSize: customFontSize ? customFontSize : 25,
          fontWeight: 'bold',
        }}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}
