import firebase from "firebase/app";

export const loginWithGoogle = async () => {
	const provider = new firebase.auth.GoogleAuthProvider();
	provider.addScope('profile');
	provider.addScope('email');

	return await firebase.auth().signInWithPopup(provider)
		.then((result) =>{
			// This gives you a Google Access Token.
			const token = result.credential.accessToken;
			// The signed-in user info.
			const user = result.user;
			console.log('google sign in resp', result)
		})
		.catch(error => {
			// handle error
		});
};

export const loginWithFacebook = async () => {
	var provider = new firebase.auth.FacebookAuthProvider();
	provider.addScope('user_birthday');

	return await firebase.auth().signInWithPopup(provider)
		.then((result) => {
			// This gives you a Facebook Access Token.
			const token = result.credential.accessToken;
			// The signed-in user info.
			const user = result.user;
			console.log('facebook sign in resp', result)
		})
		.catch(error => {
			// handle error
		});
};

// export const loginWithFacebook = async () => {
// 	await Facebook.initializeAzync('566780290461704'); // FACEBOOK_APP_ID

// 	const {type, token} = await Facebook.logInWithReadPermissionsAsync({
// 		permissions: [
// 			'public_profile',
// 			//'user_friends', <-- needs App Review from Facebook to use
// 		]
// 	});

// 	if (type === 'success') {
// 		// Build Firebase credential with the Facebook access token.
// 		const credential = firebase.auth.FacebookAuthProvider.credential(token);

// 		// Sign in with credential from the Facebook user.
// 		firebase
// 			.auth()
// 			.signInWithCredential(credential)
// 			.catch((error) => {
// 				// Handle Errors here.
// 			});
// 	}
// }