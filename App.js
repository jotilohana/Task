import React from 'react';
import AuthStack from './Navigation/AuthStack';
import {Provider} from 'react-redux';
import Store from './Store';
const App = () => {
  return (
    <Provider store={Store}>
      <AuthStack />
    </Provider>
  );
};

export default App;
