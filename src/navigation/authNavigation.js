import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainAuthPage, Login, Register, Home, AddGoal} from '../screens';

const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={MainAuthPage} />
        <Stack.Screen name="Signup" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Home} />
        <Stack.Screen name="AddGoal" component={AddGoal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthNavigation;
