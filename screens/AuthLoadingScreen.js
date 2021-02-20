import React, { useEffect, useState } from 'react';
import {
	ActivityIndicator,
	Image,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import colors from "../constants/Colors";
import { useAuthentication } from "../components/AuthContext";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.ice,
		alignItems: "center",
	},
	loadingImage: {
		width: 150,
		height: 182,
		resizeMode: "contain",
		marginTop: 170,
	},
	loadingText: {
		fontSize: 30,
		color: colors.primary,
		lineHeight: 32,
		textAlign: "center",
		marginTop: 30
	},
});

const AuthLoadingScreen = (props) => {
	const { navigation } = props;
	const { user } = useAuthentication();

	useEffect(() => {
		navigation.navigate(user.loggedIn ? "Main" : "Sign In")
	}, []);

	return (
		<View style={styles.container}>
			<ActivityIndicator/>
			<Image
				source={require("../assets/images/bubble_logo_md.png")}
				style={styles.loadingImage}
			/>
			<Text style={styles.loadingText}>Loading</Text>
		</View>
	);
};

export default AuthLoadingScreen;
