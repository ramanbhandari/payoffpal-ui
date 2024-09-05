import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, StyleSheet, Alert, TouchableOpacity, Text } from "react-native";
import Register from "../../components/register";
import { useNavigation } from "@react-navigation/native";
import ColorTheme from "../../constants/color";
import { registerRequest } from "./actions";

export default function RegisterScreen() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigation = useNavigation();

	const dispatch = useDispatch();
	const { user, loading, error } = useSelector((state) => state.register);

	const validateEmail = (email) => {
		const emailRegex = /\S+@\S+\.\S+/;
		return emailRegex.test(email);
	};

	const handleRegister = () => {
		if (!validateEmail(email)) {
			Alert.alert("Invalid email address");
			return;
		}

		if (password.length < 8) {
			Alert.alert("Password must be at least 8 characters long.");
			return;
		}
		let name = email.split('@')[0];
		dispatch(registerRequest({name, email, password}))
	};

	useEffect(() => {
		if (user) {
			Alert.alert("Registration Successful");
            navigation.navigate('ProfileScreen');
        }
	},[user, navigation]);

	useEffect(() => {
        if (error) {
            Alert.alert('Registration Failed', error);
        }
    }, [error]);

	return (
		<View style={styles.container}>
			<Register
				email={email}
				setEmail={setEmail}
				password={password}
				setPassword={setPassword}
				onSubmit={handleRegister}
			/>
			<View style={styles.signupTextContainer}>
				<Text style={styles.noAccountText}>Already Registered? </Text>
				<TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
					<Text style={styles.linkText}>Sign in here</Text>
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
		flexDirection: "row",
		marginTop: 20,
	},
	noAccountText: {
		color: ColorTheme.dark.textSecondary,
	},
	linkText: {
		color: ColorTheme.dark.primaryAccent,
		textDecorationLine: "underline",
	},
});
