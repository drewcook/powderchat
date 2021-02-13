import React from 'react';
import { Button, ScrollView, View } from 'react-native';
import MountainList from '../components/Mountains';



export default function MountainsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <MountainList navigation={navigation} />
      </ScrollView>
    </View>
  );
}