import React, {useEffect} from 'react';
import {WebView} from 'react-native-webview';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <WebView
      cacheMode="LOAD_NO_CACHE"
      source={{uri: 'https://erp.srgroupco.com/'}}
    />
  );
};

export default App;
