import React from 'react';
import Login from './src/screens/Login/Login';
import Background from './src/components/Background/Background';

const App = () => {
  return (
    <Background source={require('./src/assests/images/purple-background.jpg')}>
      <Login />
    </Background>
  );
};

export default App;
