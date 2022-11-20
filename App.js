import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

// Static imports
import {Home} from './src/screens/index';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <Home />
    </>
  );
};

export default App;
