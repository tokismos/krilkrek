import { View, Text } from "react-native";
import React from "react";
import SecondScreen from "src/Second";

const FirstScreen = (): JSX.Element => {
	return (
		<View>
			<Text>FirstScreen</Text>
			<SecondScreen />
		</View>
	);
};

export default FirstScreen;
