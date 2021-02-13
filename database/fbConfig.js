import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBHCu3VF2PsH0lJm9XzTTyKU5wnmRXbNZQ",
	authDomain: "slopechat.firebaseapp.com",
	databaseURL: "https://slopechat.firebaseio.com",
	projectId: "slopechat",
	storageBucket: "slopechat.appspot.com",
	messagingSenderId: "346314248816",
	appId: "1:346314248816:web:b8d9ce7c9c49f403bc5ab5"
};

// initialize the firebase app
if (firebase.apps.length === 0) {
	firebase.initializeApp(firebaseConfig);
}


const fbConfig = firebase;

export default fbConfig;