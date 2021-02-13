// @refresh reset
import 'react-native-gesture-handler';
import React from 'react';
import TabNavigator from './navigation/TabNavigator';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

const App = () => {
  return (
    <>
      {/* <StatusBar style="auto" /> */}
      <TabNavigator />
    </>
  );
};

export default App;
