import type { Note, Notes, Position } from "@/types/types";

export const updateNoteInNotesList = (notes: Notes, newNote: Note): Notes => {
	return notes.map((item) => {
		if (item.id === newNote.id) {
			return newNote;
		}
		return item;
	});
};

export const updateNotePositionInNotesList = (
	id: number,
	notes: Notes,
	position: Position,
): Notes => {
	return notes.map((note) => {
		if (note.id === id) {
			return {
				...note,
				pos: position,
			};
		}
		return note;
	});
};

export const removeNoteFromNotesList = (notes: Notes, id: number) => {
	return notes.filter(note => {
		if(note.id === id){
			return;
		}
		return note;
	})
}