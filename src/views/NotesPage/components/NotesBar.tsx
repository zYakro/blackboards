import { SmallButton } from "@/components/Buttons/SmallButton";
import React, { useContext } from "react";
import { Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NotesContext } from "@/context/Notes/NotesContext";
import { BlackboardsContext } from "@/context/Blackboards/BlackboardsContext";
import { SectionBar } from "../../../components/Menus/SectionBar";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { Routes } from "@/types/types";

export const NotesBar = () => {
	const { createNewNoteInBlackboard, setCurrentNote } =
		useContext(NotesContext);
	const { currentBlackboard } = useContext(BlackboardsContext);

	const navigation = useNavigation<NativeStackNavigationProp<Routes>>();

	const addNoteAndSetAsCurrent = async () => {
		if (currentBlackboard === null) {
			return;
		}

		const addedNote = await createNewNoteInBlackboard(currentBlackboard.uid);

		setCurrentNote(addedNote);
	};

	const goToBlackboardConfigPage = () => navigation.navigate("BlackboardConfig")

	return (
		<SafeAreaView className="w-screen h-22 flex flex-row justify-between items-center px-5 gap-x-2 absolute">
			<SectionBar className="flex justify-between items-center flex-row">
				<SmallButton onPress={addNoteAndSetAsCurrent}>
					<AntDesign name="pluscircle" size={22} color="white" />
				</SmallButton>
				<Text className="text-slate-50 text-lg flex-1 text-center">
					{currentBlackboard?.title}
				</Text>
				<SmallButton onPress={goToBlackboardConfigPage}>
					<FontAwesome name="gear" size={22} color="white" />
				</SmallButton>
			</SectionBar>
		</SafeAreaView>
	);
};
