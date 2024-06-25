import React from "react";
import { Text, View } from "react-native";
import { ICONS } from "@/constant/icons";
import { Background } from "../Background/Background";
import type { Backgrounds, Icons } from "@/types/types";

interface BlackboardProps {
	title: string;
	icon: Icons;
	background: Backgrounds;
}

export const Blackboard = ({ title, icon, background }: BlackboardProps) => {
	return (
		<View className="w-40 p-1 h-40 flex justify-start items-center rounded-lg border-[1px] border-textColor mb-5">
			<Background background={background}>
				<View className="px-2 py-2 w-full h-full">
					{title && (
						<Text className="text-textColor w-full font-semibold text-lg">
							{title}
						</Text>
					)}
					<View className="flex-1 flex justify-center items-center">
						{ICONS[icon]}
					</View>
				</View>
			</Background>
		</View>
	);
};
