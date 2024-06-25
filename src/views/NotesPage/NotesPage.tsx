import { View } from "react-native";
import { Notes } from "@/views/NotesPage/components/Notes";
import { NotesBar } from "@/views/NotesPage/components/NotesBar";
import { CurrentBlackboardBackground } from "@/components/Background/CurrentBlackboardBackground";
import { useContext, useEffect, useState } from "react";
import { Editor } from "@/components/Editor/Editor";
import { NotesContext } from "@/context/Notes/NotesContext";
import { BlackboardsContext } from "@/context/Blackboards/BlackboardsContext";
import type { Note, Position } from "@/types/types";

export const NotesPage = () => {
	const [isEditorVisible, setIsEditorVisible] = useState(false);

	const closeEditor = () => setIsEditorVisible(false);
	const openEditor = () => setIsEditorVisible(true);

	const {
		notes,
		getNotesFromBlackboard,
		setCurrentNote,
		getCurrentNoteText,
		updateNotePosition,
	} = useContext(NotesContext);

	const { currentBlackboard } = useContext(BlackboardsContext);

	// TODO: get a better name
	const processNoteAndOpenEditor= async (note: Note) => {
		setCurrentNote(note);

		await getCurrentNoteText();

		openEditor();
	};

	const updateNotePositionOnRelease = async (note: Note, pos: Position) => {
		await updateNotePosition(note.id, pos);
	};

	useEffect(() => {
		if (!currentBlackboard) return;

		getNotesFromBlackboard(currentBlackboard.uid);
	}, []);

	return (
		<View className="h-full w-full">
			<CurrentBlackboardBackground>
				<Notes
					notes={notes}
					onNotePressed={processNoteAndOpenEditor}
					onNoteReleased={updateNotePositionOnRelease}
				/>
				<NotesBar />
				<Editor isVisible={isEditorVisible} closeEditor={closeEditor} />
			</CurrentBlackboardBackground>
		</View>
	);
};
