import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FirstInfo from './FirstInfo';
import SecondInfo from './SecondInfo';
import ThirdInfo from './ThirdInfo';
import FourthInfo from './FourthInfo';
import FifthInfo from './FifthInfo';

const Stack = createStackNavigator();

export default function InfoNavigation() {
  return (
      <Stack.Navigator initialRouteName="FirstInfo" headerMode="none">
        <Stack.Screen name="FirstInfo" component={FirstInfo} />
        <Stack.Screen name="SecondInfo" component={SecondInfo} />
        <Stack.Screen name="ThirdInfo" component={ThirdInfo} />
        <Stack.Screen name="FourthInfo" component={FourthInfo} />
        <Stack.Screen name="FifthInfo" component={FifthInfo} />
      </Stack.Navigator>
  );
}