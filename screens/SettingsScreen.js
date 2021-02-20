import React from 'react';
import { Button, Text, View } from 'react-native';
import { useAuthentication } from '../components/AuthContext';

const SettingsScreen = ({ navigation }) => {
  const { logout } = useAuthentication();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Sign Out"
        onPress={logout}
        btnStyle={{ marginHorizontal: 30 }}
      />
    </View>
  );
};

export default SettingsScreen;
