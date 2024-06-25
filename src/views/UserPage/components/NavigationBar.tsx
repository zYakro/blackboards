import { SmallButton } from "@/components/Buttons/SmallButton";
import { SectionBar } from "@/components/Menus/SectionBar";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export const NavigationBar = () => {
  const navigation = useNavigation()

	return (
		<SectionBar className="w-full h-12 flex items-center justify-start flex-row mb-4">
			<SmallButton onPress={navigation.goBack}>
				<Ionicons name="arrow-back-circle" size={24} color="white" />
			</SmallButton>
		</SectionBar>
	);
};
