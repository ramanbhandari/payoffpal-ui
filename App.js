import React from "react";
import AppNavigator from "./navigation/app-navigator";
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
	<Provider store={store}>
		<AppNavigator />
	</Provider>
);

export default App;
