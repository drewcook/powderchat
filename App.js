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
  console.log({user})

  return (
    <NavigationContainer>
      {/* <StatusBar style="auto" /> */}
        <StartupStack.Navigator>
          {!user.loggedIn ? (
            <>
              <StartupStack.Screen name="Auth Loading" component={AuthLoadingScreen} options={{ header: () => null }} />
              <StartupStack.Screen name="Sign In" component={SignInScreen} options={{ header: () => null }} />
              <StartupStack.Screen name="Sign Up" component={SignUpScreen} />
            </>
          )
            : (
              <>
                <StartupStack.Screen name="Main" component={TabNavigator} options={{ header: () => null }} />
              </>
            )
          }
        </StartupStack.Navigator>
    </NavigationContainer>
  );
};
export default withAuthProvider()(App);
