import { View, Text, StyleSheet } from "react-native";
// // import styles from "./styles";
// import { Button, TextInput } from "react-native-paper";
// import ColorTheme from "../../constants/color";

export default function LoginHeader() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>PayoffPal</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		color: "black",
	},
});
