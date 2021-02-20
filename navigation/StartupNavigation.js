import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import TabNavigator from './TabNavigator';
import { useAuthentication } from '../components/AuthContext';

const StartupStack = createStackNavigator();

const StartupNavigation = (props) => {
  const { loggedIn } = props;

  console.log({loggedIn})
  return (
    <StartupStack.Navigator initialRouteName="Auth Loading">
      {!loggedIn ? (
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
  )
};

export default StartupNavigation;
