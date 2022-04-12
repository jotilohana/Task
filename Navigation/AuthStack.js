import HomeScreen from '../Src/Screens/HomeScreen';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HeaderImage from '../Src/Screens/HeaderImage';
import ProductDetails from '../Src/Screens/ProductDetails';
import EditDetails from '../Src/Screens/EditHeader';
const Stack = createStackNavigator();
export default function AuthStack({route}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen
          options={({route}) => ({
            title: <HeaderImage />,
          })}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={({route}) => ({
            title: <HeaderImage />,
          })}
          name="Product Details"
          component={ProductDetails}
        />
        <Stack.Screen name="Edit Details" component={EditDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
