import React, { useState, useEffect } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import mountainService from "../database/mountainService";
import MountainList from '../components/MountainList';

const MountainsScreen = (props) => {
  const { navigation } = props;
  const [loading, setLoading] = useState(true);
  const [mountains, setMountains] = useState(null);

  useEffect(() => {
    mountainService.getAllMountains()
      .then(setMountains)
      .catch((e) => console.log(e))
      .then(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator />;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <MountainList navigation={navigation} mountains={mountains} />
      </ScrollView>
    </View>
  );
};

export default MountainsScreen;