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
	// await Facebook.initializeAzync('566780290461704'); // FACEBOOK_APP_ID
	var provider = new firebase.auth.FacebookAuthProvider();
	provider.addScope('user_birthday');
	// provider.addScope('public_profile');
	// provider.addScope('user_friends');

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
