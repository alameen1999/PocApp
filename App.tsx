import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import MainNavigators from './src/navigators/MainNavigators/MainNavigators';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainNavigators />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
