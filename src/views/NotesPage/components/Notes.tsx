import { MovableNote } from "../../../components/Notes/MovableNote";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import type { Note, Notes as INotes, Position } from "@/types/types";

interface NotesProps {
	notes: INotes;
	onNotePressed: (note: Note) => void;
	onNoteReleased: (note: Note, pos: Position) => void;
}

export const Notes = ({ notes, onNotePressed, onNoteReleased }: NotesProps) => {
	return (
		<SafeAreaView>
			<View className="h-screen w-screen bg-transparent">
				{notes.map((note) => (
					<MovableNote
						key={note.id}
						note={note}
						onPress={() => onNotePressed(note)}
						onRelease={onNoteReleased}
					/>
				))}
			</View>
		</SafeAreaView>
	);
};
