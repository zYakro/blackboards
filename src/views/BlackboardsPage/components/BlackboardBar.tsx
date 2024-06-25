import { SmallButton } from "@/components/Buttons/SmallButton";
import React, { useContext } from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { BlackboardsContext } from "@/context/Blackboards/BlackboardsContext";
import { SectionBar } from "../../../components/Menus/SectionBar";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import type { Routes } from "@/types/types";

export const BlackboardBar = () => {
	const { createNewBlackboard, setCurrentBlackboard } =
		useContext(BlackboardsContext);

	const navigation = useNavigation<NativeStackNavigationProp<Routes>>();

	const addNewBlackboardAndSetAsCurrent = async () => {
		const newBlackboard = await createNewBlackboard();

		setCurrentBlackboard(newBlackboard);
	};

	const goToUsersPage = () => navigation.navigate('User')

	return (
		<View className="w-screen h-22 flex flex-row justify-between items-center px-5 gap-x-2">
			<SectionBar className="flex justify-between items-center flex-row">
				<SmallButton onPress={addNewBlackboardAndSetAsCurrent}>
					<AntDesign
						name="pluscircle"
						size={22}
						color="white"
						className="bg-red-500 text-red-500"
					/>
				</SmallButton>
				<SmallButton onPress={goToUsersPage}>
					<FontAwesome name="user" size={22} color="white" />
				</SmallButton>
			</SectionBar>
		</View>
	);
};
