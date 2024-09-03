import { View, Text } from "react-native";
import styles from "./styles";
import {
	Button,
	TextInput,
} from "react-native-paper";

export default function Register({email, setEmail, password, setPassword, onSubmit }) {
	return (
		<View style={styles.container}>
            <View style={styles.titleContainer}>
				<Text style={styles.title}>Register</Text>
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

			<Button
                mode="contained"
				onPress={onSubmit}
				style={styles.button}>
                    Login
			</Button>
		</View>
	);
}
