import HomeScreen from '../Src/Screens/HomeScreen';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HeaderImage from '../Src/Screens/HeaderImage';
const Stack = createStackNavigator();
export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          options={({route}) => ({
            title: <HeaderImage />,
          })}
          name="HomeScreen"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
