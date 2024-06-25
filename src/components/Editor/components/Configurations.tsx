import React from "react";
import { View, type ViewProps } from "react-native";
import { ButtonWithMenu } from "@/components/Buttons/ButtonWithMenu";
import { FontAwesome } from "@expo/vector-icons";
import { NOTE_COLORS } from "@/constant/notes";
import { SmallButton } from "@/components/Buttons/SmallButton";
import { ICONS } from "@/constant/icons";
import type { Icons, NoteColors } from "@/types/types";

const ConfigButtons = (props: ViewProps) => {
	return (
		<View
			{...props}
			className="flex justify-center items-center h-auto w-auto flex-row"
		/>
	);
};

const ChangeColor = ({
	currentColor,
	setColor,
}: {
	currentColor: NoteColors;
	setColor: (color: NoteColors) => void;
}) => {
	return (
		<ButtonWithMenu
			buttonChildren={
				<FontAwesome
					name="circle"
					size={25}
					color={NOTE_COLORS[currentColor]}
				/>
			}
			title="Set a color"
			menuItems={Object.keys(NOTE_COLORS).map((item) => (
				<SmallButton onPress={() => setColor(item as NoteColors)} key={item}>
					<FontAwesome
						name="circle"
						size={24}
						color={NOTE_COLORS[item as NoteColors]}
					/>
				</SmallButton>
			))}
		/>
	);
};

const ChangeIcon = ({
	currentIcon,
	setIcon,
}: {
	currentIcon: Icons;
	setIcon: (icon: Icons) => void;
}) => {
	return (
		<ButtonWithMenu
			buttonChildren={ICONS[currentIcon]}
			title="Set an icon "
			menuItems={Object.keys(ICONS).map((icon) => (
				<SmallButton onPress={() => setIcon(icon as Icons)} key={icon}>
					{ICONS[icon as Icons]}
				</SmallButton>
			))}
		/>
	);
};

ConfigButtons.ChangeColor = ChangeColor;
ConfigButtons.ChangeIcon = ChangeIcon;

export { ConfigButtons };
