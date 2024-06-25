import { Dimensions, TouchableOpacity } from "react-native";
import { MovableView } from "../MovableView";
import { Note } from "./Note";
import type { Note as INote, Position } from "@/types/types";

type IMovableNoteProps = {
	note: INote;
	onPress: () => void;
	onRelease: (note: INote, pos: Position) => void;
};

export const MovableNote = ({
	note,
	onPress,
	onRelease,
}: IMovableNoteProps) => {
	const getPositionInScreenByNotePosition = ({ x, y }: Position) => {
		return {
			x: x * Dimensions.get("window").width,
			y: y * Dimensions.get("window").height,
		};
	};

	const getNotePositionByPositionInScreen = ({ x, y }: Position) => {
		return {
			x: x / Dimensions.get("window").width,
			y: y / Dimensions.get("window").height,
		};
	};

	const onReleasedNote = (pos: Position) => {
		onRelease(note, getNotePositionByPositionInScreen(pos));
	};

	return (
		<MovableView
			initialPosition={getPositionInScreenByNotePosition(note.pos)}
			onRelease={onReleasedNote}
		>
			<TouchableOpacity onPress={onPress}>
				<Note viewProps={{ className: "h-12 w-12" }} {...note} />
			</TouchableOpacity>
		</MovableView>
	);
};
