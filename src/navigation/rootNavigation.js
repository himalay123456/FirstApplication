/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Static imports
import TabsNavigation from './tabsNavigation';
import AuthNavigation from './authNavigation';
const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getToken = async () => {
    const token = await AsyncStorage.getItem('token');
    console.log('token', token);
    if (token && !isLoggedIn) {
      setIsLoggedIn(true);
    } else {
      if (isLoggedIn) {
        setIsLoggedIn(false);
      }
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isLoggedIn ? (
        <Stack.Screen name="App" component={TabsNavigation} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigation} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigation;
