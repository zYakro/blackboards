import { useState } from "react";
import {
	getNotesFromBlackboard as getNotesFromBlackboardDb,
	createNoteInBlackboard,
	updateNote as updateNoteInDb,
	updateNoteTextById,
	updateNotePosition as updateNotePositionInDb,
	getNoteTextById,
	deleteNoteById,
} from "@/services/notes.service";
import {
	removeNoteFromNotesList,
	updateNoteInNotesList,
	updateNotePositionInNotesList,
} from "@/utils/notes.utils";
import { useErrors } from "./useErrors";
import type { Note, Notes, Position } from "@/types/types";

export const useNotesManager = () => {
	const [notes, setNotes] = useState<Notes>([]);
	const [currentNote, setCurrentNote] = useState<Note | null>(null);
	const [currentNoteText, setCurrentNoteText] = useState("");

	const { displayAlertOnError } = useErrors();

	const getNotesFromBlackboard = async (blackboardUid: string) => {
		try {
			const newNotes = await getNotesFromBlackboardDb(blackboardUid);

			setNotes(newNotes);
		} catch (e) {
			displayAlertOnError(e);
		}
	};

	const createNewNoteInBlackboard = async (blackboardUid: string) => {
		try {
			const newNote = await createNoteInBlackboard(blackboardUid);

			setNotes([...notes, newNote]);

			return newNote;
		} catch (e) {
			displayAlertOnError(e);
		}

		return null;
	};

	const getCurrentNoteText = async () => {
		if (currentNote === null) {
			return;
		}

		try {
			const text = await getNoteTextById(currentNote.id);

			setCurrentNoteText(text);
		} catch (e) {
			displayAlertOnError(e);
		}
	};

	const updateNote = async (updatedNote: Note) => {
		const updatedNotes = updateNoteInNotesList(notes, updatedNote);

		setNotes(updatedNotes);

		try {
			await updateNoteInDb(updatedNote);
		} catch (e) {
			displayAlertOnError(e);
		}
	};

	const updateCurrentNoteText = async (text: string) => {
		if (currentNote === null) {
			return;
		}

		try {
			await updateNoteTextById(currentNote.id, text);
		} catch (e) {
			displayAlertOnError(e);
		}
	};

	const updateNotePosition = async (id: number, position: Position) => {
		try {
			await updateNotePositionInDb(id, position);

			const updatedNotes = updateNotePositionInNotesList(id, notes, position);

			setNotes(updatedNotes);
		} catch (e) {
			displayAlertOnError(e);
		}
	};

	const deleteCurrentNote = async () => {
		try {
			if (!currentNote) {
				return;
			}

			await deleteNoteById(currentNote.id);

			const newList = removeNoteFromNotesList(notes, currentNote.id);

			setNotes(newList);
		} catch (e) {
			displayAlertOnError(e);
		}
	};

	return {
		notes,
		currentNote,
		currentNoteText,
		getNotesFromBlackboard,
		getCurrentNoteText,
		setCurrentNote,
		createNewNoteInBlackboard,
		updateCurrentNoteText,
		updateNote,
		updateNotePosition,
		deleteCurrentNote,
	};
};
