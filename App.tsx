import React from "react";
import { View } from "react-native";

import FirstScreen from "src/components/FirstScreen";

function App(): JSX.Element {
	return (
		<View className="flex-1 bg-orange-500 items-center justify-center  ">
			<FirstScreen />
		</View>
	);
}

export default App;
