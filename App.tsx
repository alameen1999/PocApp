import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import Navigators from './src/navigators/Navigators/Navigators';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Navigators />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
