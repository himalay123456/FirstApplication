import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

// Static imports
import AuthNavigation from './src/navigation/authNavigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <AuthNavigation />
    </>
  );
};

export default App;
