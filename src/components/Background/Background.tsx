import { BACKGROUND_PROPS } from "@/constant/backgrounds";
import type { Backgrounds } from "@/types/types";
import type React from "react";
import { ImageBackground } from "react-native";

interface BackgroundProps {
	background: Backgrounds;
	children?: React.ReactNode;
}

export const Background = ({ background, children }: BackgroundProps) => {
	const currentBackground =
		BACKGROUND_PROPS[background] !== undefined
			? BACKGROUND_PROPS[background]
			: BACKGROUND_PROPS.default

	return (
		<ImageBackground
			resizeMode="repeat"
			source={currentBackground.image}
			className="w-full h-full"
			style={{
				backgroundColor: currentBackground.bgColor,
			}}
		>
			{children}
		</ImageBackground>
	);
};
