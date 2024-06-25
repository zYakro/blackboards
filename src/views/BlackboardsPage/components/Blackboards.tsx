import { BlackboardsContext } from "@/context/Blackboards/BlackboardsContext";
import React, { useContext, useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import { Blackboard } from "../../../components/Blackboards/Blackboard";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { Blackboard as IBlackboard, Routes } from "@/types/types";

export const Blackboards = () => {
	const { blackboards, getBlackboards, setCurrentBlackboard } =
		useContext(BlackboardsContext);

	const navigation = useNavigation<NativeStackNavigationProp<Routes>>();

	const setBlackboardAsCurrentAndGoToNotes = (blackboard: IBlackboard) => {
		setCurrentBlackboard(blackboard);

		navigation.navigate("Notes");
	};

	useEffect(() => {
		getBlackboards();
	}, []);

	return (
		<View className="w-full h-full flex flex-wrap py-5 px-2 flex-row justify-evenly">
			{blackboards.map((blackboard: IBlackboard) => (
				<TouchableOpacity
					key={blackboard.id}
					onPress={() => setBlackboardAsCurrentAndGoToNotes(blackboard)}
				>
					<Blackboard {...blackboard} />
				</TouchableOpacity>
			))}
		</View>
	);
};
