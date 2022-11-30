import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

// Static imports
import TabsNavigation from './tabsNavigation';
import AuthNavigation from './authNavigation';
const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const {auth} = useSelector(state => state);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {auth?.isLogin ? (
        <Stack.Screen name="App" component={TabsNavigation} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigation} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigation;
