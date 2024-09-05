import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import RegisterScreen from "../screens/register/index";
import HomeScreen from "../screens/home";
import ProfileScreen from "../screens/profile/profile";
import LoginScreen from "../screens/login/index";
import { SafeAreaView } from "react-native";
import * as Font from "expo-font";
import ColorTheme from "../constants/color";
import * as SplashScreen from "expo-splash-screen";
import { useState, useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const fetchFonts = () => {
	return Font.loadAsync({
		"Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
		"Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
	});
};
const Stack = createStackNavigator();

export default function AppNavigator() {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	useEffect(() => {
		async function loadFonts() {
			await fetchFonts();
			setFontsLoaded(true);
			await SplashScreen.hideAsync();
		}
		loadFonts();
	}, []);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: ColorTheme.dark.primary }}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="LoginScreen" component={LoginScreen} />
					<Stack.Screen name="HomeScreen" component={HomeScreen} />
					<Stack.Screen name="RegisterScreen" component={RegisterScreen} />
					<Stack.Screen name="ProfileScreen" component={ProfileScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaView>
	);
}
