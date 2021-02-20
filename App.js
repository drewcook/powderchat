// @refresh reset
import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { withAuthProvider } from './components/AuthContext';
import { createStackNavigator } from '@react-navigation/stack';
import AuthLoadingScreen from "./screens/AuthLoadingScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import TabNavigator from './navigation/TabNavigator';
import StartupNavigation from './navigation/StartupNavigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});


const StartupStack = createStackNavigator();

const App = (props) => {
  const { user } = props;

  return (
    <NavigationContainer>
      {/* <StatusBar style="auto" /> */}
      <StartupNavigation loggedIn={user.loggedIn} />
    </NavigationContainer>
  );
};

export default withAuthProvider()(App);
