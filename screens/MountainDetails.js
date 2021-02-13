import React from "react";
import {
	Image,
	StyleSheet,
	Text,
	View,
} from "react-native";
// import Button from "../components/Button";
import colors from "../constants/Colors";
// import mountainService from "../database/mountainService";
// import userService from "../database/userService";
// import FontAwesomeIcon from "../components/FontAwesomeIcon";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	header: {
		backgroundColor: "#efefef",
		padding: 20,
		flex: 0,
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
	const mountainName = props.route.params.name;

	const mountain = {
		name: mountainName,
		region: 'Aspen, CO',
		iconPath: 'https:/hosting.someurl.com/pixelimages/dfklnalefnalk;fea;lfjae;lfja;lwejf'
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image source={{ uri: mountain.iconPath }} style={styles.image} />
				<Text style={styles.title}>{mountain.name}</Text>
				<Text style={styles.region}>{mountain.region}</Text>
			</View>
			<View style={styles.body}>
				<Text>Here is some text about the mountain.  Check in below.</Text>
			</View>
		</View>
	);
};

export default MountainDetailsScreen;
