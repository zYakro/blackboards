import type { Note, Notes, Position } from "@/types/types";
import { createContext } from "react";

interface INotesContext {
	notes: Notes;
	currentNote: Note | null;
	currentNoteText: string;
	getNotesFromBlackboard: (blackboardUid: string) => Promise<void>;
	getCurrentNoteText: () => Promise<void>;
	setCurrentNote: React.Dispatch<React.SetStateAction<Note | null>>;
	createNewNoteInBlackboard: (blackboardUid: string) => Promise<Note | null>;
	updateNote: (newNote: Note) => Promise<void>;
	updateCurrentNoteText: (text: string) => Promise<void>;
	updateNotePosition: (id: number, position: Position) => Promise<void>;
	deleteCurrentNote: () => Promise<void>;
}

export const NotesContext = createContext<INotesContext>({
	notes: [],
	currentNote: null,
	currentNoteText: "",
	getCurrentNoteText: () => {},
	getNotesFromBlackboard: () => {},
	setCurrentNote: () => {},
	createNewNote: () => {},
	updateNote: () => {},
	updateCurrentNoteText: () => {},
	updateNotePosition: () => {},
	deleteCurrentNote: () => {},
});
