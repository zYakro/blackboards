import { SmallButton } from "@/components/Buttons/SmallButton";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { SectionBar } from "@/components/Menus/SectionBar";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export const NavigationBar = ({
	onDeletePressed,
}: { onDeletePressed: () => void }) => {
	const navigation = useNavigation();

	return (
		<SectionBar className="w-full h-12 flex items-center justify-start flex-row mb-4">
			<SmallButton onPress={navigation.goBack}>
				<Ionicons name="arrow-back-circle" size={24} color="white" />
			</SmallButton>
			<SmallButton onPress={onDeletePressed} className="ml-auto">
				<MaterialIcons name="delete" size={24} color="white" />
			</SmallButton>
		</SectionBar>
	);
};
