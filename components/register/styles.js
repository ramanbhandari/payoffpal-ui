import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
import ColorTheme from "../../constants/color";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	titleContainer: {
        width: width * 0.9,
    },  
	title: {
		fontSize: 24,
		fontFamily: 'Roboto-Bold',
		marginBottom: 20,
        textAlign: 'left',
		color: ColorTheme.dark.textPrimary
	},
	input: {
		width: width * 0.9, // Adjust width to be responsive
		marginBottom: 10,
	},
	button: {
		marginTop: 20,
        width: width * 0.9,
		backgroundColor: ColorTheme.dark.primaryAccent,
	},
});

export default styles;
