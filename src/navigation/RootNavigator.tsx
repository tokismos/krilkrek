import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "src/screens/FirstScreen";
import { type RootStackParamList } from "src/screens/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = (): React.JSX.Element => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="First" component={FirstScreen} />
		</Stack.Navigator>
	);
};

export default RootNavigator;
