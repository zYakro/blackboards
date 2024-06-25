import { NotesContext } from "./NotesContext";
import { useNotesManager } from "@/hooks/useNotesManager";

export const NotesProvider = ({ children }: { children: React.ReactNode }) => {
	const {
		notes,
		currentNote,
		currentNoteText,
		getNotesFromBlackboard,
		setCurrentNote,
		createNewNoteInBlackboard,
		updateCurrentNoteText,
		updateNote,
		updateNotePosition,
		getCurrentNoteText,
		deleteCurrentNote
	} = useNotesManager();

	return (
		<NotesContext.Provider
			value={{
				notes,
				currentNote,
				currentNoteText,
				getNotesFromBlackboard,
				setCurrentNote,
				createNewNoteInBlackboard,
				updateCurrentNoteText,
				updateNote,
				updateNotePosition,
				getCurrentNoteText,
				deleteCurrentNote
			}}
		>
			{children}
		</NotesContext.Provider>
	);
};
