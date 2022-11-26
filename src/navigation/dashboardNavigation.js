import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, AddGoal} from '../screens';

const Stack = createNativeStackNavigator();

const DashboardNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={Home} />
      <Stack.Screen name="AddGoal" component={AddGoal} />
    </Stack.Navigator>
  );
};

export default DashboardNavigation;
