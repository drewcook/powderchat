import React , { useState, useEffect } from "react";
import {
	ActivityIndicator,
	Image,
	StyleSheet,
	Text,
	View,
} from "react-native";
import mountainService from "../database/mountainService";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	header: {
		backgroundColor: "#efefef",
		padding: 20,
		alignItems: "center",
		justifyContent: "center",
		borderBottomWidth: 1,
		borderBottomColor: "#aaa",
	},
	image: {
		width: 120,
		height: 120,
		borderRadius: 60,
		marginBottom: 15,
		borderWidth: 1,
		borderColor: "#aaa",
	},
	title: {
		textAlign: "center",
		fontSize: 28,
		marginBottom: 10,
	},
	region: {
		textAlign: "center",
		fontSize: 22,
		color: "#aaa",
	},
	body: {
		padding: 30,
	}
});

const MountainDetailsScreen = (props) => {
	const { route } = props;
	const [loading, setLoading] = useState(true);
	const [details, setDetails] = useState(null);
	let imgSrc = null;

	useEffect(() => {
		mountainService.getMountainById(route.params.id)
			.then(setDetails)
			.catch((e) => console.log(e))
			.then(() => setLoading(false));
	}, [])

	if (loading) return <ActivityIndicator />;
	// const logosDir = firebase.storage().ref().child('mountains/logos');

	if (details) {
		// imgSrc = require(`../assets/images/mountains/${details.logo}`);
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image source={null} style={styles.image} />
				<Text style={styles.title}>{details.name}</Text>
				<Text style={styles.region}>{details.region}</Text>
			</View>
			<View style={styles.body}>
				<Text>{`Here is some text about ${details.name}.  Check in below.`}</Text>
			</View>
		</View>
	);
};

export default MountainDetailsScreen;
