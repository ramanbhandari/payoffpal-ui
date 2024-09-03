import { View, Text } from "react-native";
import styles from "./styles";
import { Button, TextInput } from "react-native-paper";
import ColorTheme from "../../constants/color";

export default function Login({
	email,
	setEmail,
	password,
	setPassword,
	onSubmit,
}) {
	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>Log in</Text>
			</View>

			<TextInput
				style={styles.input}
				placeholder="Email"
				value={email}
				onChangeText={setEmail}
			/>
			<TextInput
				style={styles.input}
				placeholder="Password"
				secureTextEntry
				value={password}
				onChangeText={setPassword}
			/>

			<Button mode="contained" onPress={onSubmit} style={styles.button}>
				Login
			</Button>
		</View>
	);
}
