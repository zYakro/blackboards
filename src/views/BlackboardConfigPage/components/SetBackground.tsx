import React from "react";
import { SectionContainer } from "../containers/SectionContainer";
import { BACKGROUND_PROPS } from "@/constant/backgrounds";
import { TouchableOpacity, View } from "react-native";
import type { Backgrounds } from "@/types/types";
import { Background } from "@/components/Background/Background";

interface SetBackgroundProps {
	setBackground: (background: Backgrounds) => void;
}

export const SetBackground = ({ setBackground }: SetBackgroundProps) => {
	return (
		<SectionContainer>
			<View className="flex flex-row w-full flex-wrap">
				{Object.keys(BACKGROUND_PROPS).map((background) => {
					return (
						<TouchableOpacity
							className="w-16 h-16 border-[1px] border-textColor p-1 rounded-md mr-2 mb-2"
							onPress={() => setBackground(background as Backgrounds)}
							key={background}
						>
							<Background background={background as Backgrounds} />
						</TouchableOpacity>
					);
				})}
			</View>
		</SectionContainer>
	);
};
