import { Text, View } from "react-native";
import React from "react";
import { type RootStackParamList } from "./types";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "First">;

const FirstScreen: React.FC<Props> = (): JSX.Element => {
	return (
		<View className="flex-1 bg-orange-500 items-center justify-center  ">
			<Text className="text-3xl p-2">Good Luck bro ! !</Text>
		</View>
	);
};

export default FirstScreen;
