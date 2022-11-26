import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainAuthPage, Login, Register} from '../screens';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={MainAuthPage} />
      <Stack.Screen name="Signup" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
