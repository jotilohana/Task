import React from 'react';
import {SafeAreaView} from 'react-native';
import AuthStack from './Navigation/AuthStack';

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <AuthStack />
    </SafeAreaView>
  );
};

export default App;
