import { SmallButton } from "@/components/Buttons/SmallButton";
import { ICONS } from "@/constant/icons";
import type { Icons } from "@/types/types";
import React from "react";
import { View } from "react-native";
import { SectionContainer } from "../containers/SectionContainer";

export const SetIcon = ({ setIcon }: { setIcon: (icon: Icons) => void }) => {
	return (
		<SectionContainer>
			<View className="flex flex-row w-full flex-wrap">
				{Object.keys(ICONS).map((icon) => {
					return (
						<SmallButton onPress={() => setIcon(icon as Icons)} key={icon}>
							{ICONS[icon as Icons]}
						</SmallButton>
					);
				})}
			</View>
		</SectionContainer>
	);
};
