import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

const Home = () => {
	const router = useRouter();
	return (
		<SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
			<View>
				<Stack.Screen 
                    options={{
                        headerStyle: { backgroundColor: '#fff'},
                    }}
                />
			</View>
		</SafeAreaView>
	);
};
