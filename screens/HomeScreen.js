import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useAuthentication } from '../components/AuthContext';

const styles = StyleSheet.create({
  bgImg: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    paddingTop: 100,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  welcomePhoto: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginVertical: 30,
  },
  welcomeText: {
    fontSize: 30,
    color: "#fff",
    lineHeight: 32,
    textAlign: 'center',
  },
});

const HomeScreen = ({ navigation }) => {
  const { user } = useAuthentication();

  console.log({user})

  return (
    <ImageBackground source={require('../assets/images/powder_bg.jpg')} style={styles.bgImg}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/bubble_logo_md.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.welcomeContainer}>
          {user.photoURL ?
            <Image
              source={{ uri: user.photoURL }}
              style={styles.welcomePhoto}
            /> :
            <Image
              source={require("../assets/images/default_user.png")}
              style={styles.welcomePhoto}
            />
          }
          <Text style={styles.welcomeText}>Hello, {user.displayName !== null ? user.displayName : user.email}!</Text>
        </View>
      </View>
    </ImageBackground>
  );
};


export default HomeScreen;
