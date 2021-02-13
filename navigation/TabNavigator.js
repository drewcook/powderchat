import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MountainsScreen from '../screens/MountainsScreen';
import MountainDetailsScreen from '../screens/MountainDetails';
import ChatsScreen from '../screens/ChatsScreen';
import SettingsScreen from '../screens/SettingsScreen';

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}


const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const MountainsStack = createStackNavigator();

function MountainsStackScreen() {
  return (
    <MountainsStack.Navigator>
      <MountainsStack.Screen name="Mountains" component={MountainsScreen} />
      <MountainsStack.Screen name="Mountain Details" component={MountainDetailsScreen} />
    </MountainsStack.Navigator>
  );
}

const ChatsStack = createStackNavigator();

function ChatsStackScreen() {
  return (
    <ChatsStack.Navigator>
      <ChatsStack.Screen name="Chats" component={ChatsScreen} />
      <ChatsStack.Screen name="Details" component={DetailsScreen} />
    </ChatsStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name={`information-circle${focused ? '' : '-outline'}`}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Mountains"
        component={MountainsStackScreen}
        options={{
          tabBarLabel: 'Mountains',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name="mountain"
              set="fa"
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatsStackScreen}
        options={{
          tabBarLabel: 'Chats',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name="chatbubbles"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name='options'
            />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default TabNavigator;
