import React, { useState} from "react";
import {
	Image,
	ImageBackground,
	Text,
	TextInput,
	StyleSheet,
	View,
} from "react-native";
import {ImagePicker, Permissions} from "expo";
import Button from "../components/Button";
import colors from "../constants/Colors";
import firebase from 'firebase/app';

const SignUpScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');
	const [photo, setPhoto] = useState(null);
	const [authError, setAuthError] = useState(null);

	const handlePickImage = async () => {
		const { status, permissions } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
		console.log(permissions);
		if (status === "granted") {
			let result = await ImagePicker.launchImageLibraryAsync({
				allowsEditing: true,
				aspect: [1, 1],
			});

			console.log(result);

			if (!result.cancelled) {
				setPhoto(result.uri);
			}
		} else {
			throw new Error('Camera permission not granted');
		}
	};

	const handleCreateAccount = () => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(userCredential => {
				// created and signed in
				const user = userCredential.user;
				console.log(user);
				// TODO: now create a user record from logged in user credential
			})
			.catch(error => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setAuthError(errorCode + ': ' + errorMessage);
			})
	};

	return (
		<ImageBackground source={require('../assets/images/auth_bg2.jpg')} style={styles.bgImg}>
			<View style={styles.container}>
				<Text style={styles.text}>It's easy to sign up! Just use a valid email address with a unique
					password and you'll be ready to go. We'd also need a name and optional photo to display for other riders.</Text>
				<View style={styles.fieldContainer}>
					<TextInput
						style={styles.textField}
						onChangeText={setEmail}
						value={email}
						placeholder="Email"
					/>
				</View>
				<View style={styles.fieldContainer}>
					<TextInput
						style={styles.textField}
						onChangeText={setPassword}
						secureTextEntry={true}
						value={password}
						placeholder="Password"
					/>
				</View>
				<View style={styles.fieldContainer}>
					<TextInput
						style={styles.textField}
						onChangeText={setUsername}
						value={username}
						placeholder="Name"
					/>
				</View>
				<View style={styles.fieldContainerImage}>
					<Button
						bgColor={colors.primary}
						title="Choose Photo"
						onPress={handlePickImage}
						btnStyle={{flexGrow: 1}}
					/>
					<Image
						source={photo ? {uri: photo} : require("../assets/images/default_user.png")}
						style={styles.signUpPhoto}
					/>
				</View>
				{authError && <Text style={styles.errorMsg}>{authError}</Text>}
				<Button
					title="Create Account"
					onPress={handleCreateAccount}
				/>
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	bgImg: {
		width: "100%",
		height: "100%",
	},
	container: {
		flex: 1,
		paddingHorizontal: 20,
		paddingTop: 100,
	},
	text: {
		color: "#fff",
		fontSize: 18,
		marginBottom: 30,
		textAlign: "center",
	},
	fieldContainer: {
		marginVertical: 10,
		alignSelf: "stretch",
	},
	fieldContainerImage: {
		marginTop: 10,
		marginBottom: 50,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	label: {
		marginBottom: 5,
	},
	textField: {
		fontSize: 20,
		paddingHorizontal: 12,
		height: 50,
		borderRadius: 4,
		backgroundColor: "rgba(255, 255, 255, 0.8)",
	},
	signUpPhoto: {
		width: 120,
		height: 120,
		borderRadius: 60,
		marginLeft: 15
	},
	errorMsg: {
		color: "red",
		marginVertical: 2,
		fontSize: 15,
	},
});

export default SignUpScreen;
