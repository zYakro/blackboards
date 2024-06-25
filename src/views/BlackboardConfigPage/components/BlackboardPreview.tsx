import { Blackboard } from "@/components/Blackboards/Blackboard";
import type { Backgrounds, Icons } from "@/types/types";
import React from "react";
import { Text, View } from "react-native";

interface BlackboardPreviewProps {
	title: string;
	icon: Icons;
	background: Backgrounds;
}

export const BlackboardPreview = ({
	title,
	icon,
	background,
}: BlackboardPreviewProps) => {
	return (
		<View className="h-auto">
			<Text className="text-textColor font-semibold text-base">Preview:</Text>
			<View className="w-full flex justify-center items-center my-4">
				<Blackboard title={title} icon={icon} background={background} />
			</View>
		</View>
	);
};
