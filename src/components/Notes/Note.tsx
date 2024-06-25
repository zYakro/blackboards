import { View, type ViewProps } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { NOTE_COLORS } from "@/constant/notes";
import { ICONS } from "@/constant/icons";
import type { Icons, NoteColors, NoteTypes } from "@/types/types";

type NoteProps = {
	color: NoteColors;
	type: NoteTypes;
	icon: Icons;
	viewProps?: ViewProps;
};

export const Note = (props: NoteProps) => {
	const noteColor = NOTE_COLORS[props.color];
	const noteIcon = ICONS[props.icon];

	return (
		<View {...props.viewProps} className="h-12 w-12">
			<View className="w-full h-full bg-[#0000003b] absolute ml-1 mt-1 rounded-sm" />
			<View
				className="w-full h-full rounded-sm flex"
				style={{
					backgroundColor: noteColor,
				}}
			>
				<View className="ml-1 -mt-3 flex w-full items-center justify-center p-1">
					<Entypo name="pin" size={16} color="#ff6b6b" />
				</View>
				<View className="w-full flex justify-center items-center">
					{noteIcon}
				</View>
			</View>
		</View>
	);
};
