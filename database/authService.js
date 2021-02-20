import firebase from "firebase/app";

export const loginWithFacebook = async () => {
	await Facebook.initializeAzync('566780290461704'); // FACEBOOK_APP_ID

	const {type, token} = await Facebook.logInWithReadPermissionsAsync({
		permissions: [
			'public_profile',
			//'user_friends', <-- needs App Review from Facebook to use
		]
	});

	if (type === 'success') {
		// Build Firebase credential with the Facebook access token.
		const credential = firebase.auth.FacebookAuthProvider.credential(token);

		// Sign in with credential from the Facebook user.
		firebase
			.auth()
			.signInWithCredential(credential)
			.catch((error) => {
				// Handle Errors here.
			});
	}
}