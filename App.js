// @refresh reset
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { withAuthProvider } from './components/AuthContext';
import StartupNavigation from './navigation/StartupNavigation';

const App = (props) => {
  const { user } = props;

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <StartupNavigation loggedIn={user.loggedIn} />
    </NavigationContainer>
  );
};

export default withAuthProvider()(App);
