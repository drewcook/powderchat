import React, { useState} from "react";
import {
	Image,
	ImageBackground,
	Text,
	TextInput,
	StyleSheet,
	View,
} from "react-native";
import Button from "../components/Button";
import colors from "../constants/Colors";
import firebase from 'firebase/app';

const SignUpScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');
	const [authError, setAuthError] = useState(null);
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
				<Text style={styles.text}>
					It's easy to sign up! Just use a valid email address with a unique password and you'll be ready to go.
				</Text>
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
