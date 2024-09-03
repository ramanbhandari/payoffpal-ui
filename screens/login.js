import React from "react";
import { useState } from "react";
import { View, StyleSheet, Alert, TouchableOpacity, Text } from "react-native";
import Login from "../components/login/";
import { useNavigation } from '@react-navigation/native';
import ColorTheme from "../constants/color"

export default function LoginScreen() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const navigation = useNavigation();

	const validateEmail = (email) => {
		const emailRegex = /\S+@\S+\.\S+/;
		return emailRegex.test(email);
	};

	const handleLogin = () => {
		if (!validateEmail(email)) {
			Alert.alert("Incorrect email and/or password. Try Again!");
			return;
		}

		if (password.length < 8) {
			Alert.alert("Incorrect email and/or password. Try Again!");
      return;
		}

		Alert.alert('Login Successful');
        navigation.navigate('ProfileScreen');
	};

	return (
		<View style={styles.container}>
			<Login
				email={email}
				setEmail={setEmail}
				password={password}
				setPassword={setPassword}
				onSubmit={handleLogin}
			/>
            <View style={styles.signupTextContainer}>
                <Text style={styles.noAccountText}>No account yet? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                    <Text style={styles.linkText}>Register here</Text>
                </TouchableOpacity>
            </View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: ColorTheme.dark.primary,
		padding: 20,
	},
    signupTextContainer: {
		flexDirection: 'row',
		marginTop: 20,
	},
	noAccountText: {
		color: ColorTheme.dark.textSecondary
	},
    linkText: {
		color: ColorTheme.dark.primaryAccent,
		textDecorationLine: 'underline',
	},
});
