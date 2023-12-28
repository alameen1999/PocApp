import React from 'react';
import Login from './src/screens/Login/Login';
import Background from './src/components/Background/Background';
// import Register from './src/screens/Register/Register';

const App = () => {
  return (
    <Background source={require('./src/assests/images/purple-background.jpg')}>
      <Login />
      {/* <Register /> */}
    </Background>
  );
};

export default App;
