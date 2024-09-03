import { StyleSheet, Dimensions } from "react-native";
import ColorTheme from "../../constants/color"
const { width } = Dimensions.get("window");

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
        fontFamily: 'Roboto-Bold',
		fontSize: 24,
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
