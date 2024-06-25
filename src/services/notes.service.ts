import { supabase } from "@/supabase/config";
import { DatabaseError } from "./error.service";
import type { Note, Notes, Position } from "@/types/types";

export const getNotesFromBlackboard = async (
	blackboardUid: string,
): Promise<Notes> => {
	try {
		const session = await supabase.auth.getSession();

		if (session.error) throw session.error;

		const { data, error } = await supabase
			.from("notes")
			.select("id, color, type, icon, pos")
			.eq("blackboard_uid", blackboardUid);

		if (error) throw error;

		return data as Notes;
	} catch (e) {
		throw new DatabaseError(
			"Something unexpected happened when trying to get your notes... Try again later",
		);
	}
};

export const updateNote = async (note: Note) => {
	try {
		const session = await supabase.auth.getSession();

		if (session.error) throw session.error;

		const { error } = await supabase
			.from("notes")
			.update(note)
			.eq("id", note.id);

		if (error) throw error;
	} catch (e) {
		throw new DatabaseError(
			"Something unexpected happened when trying to update your note... Try again later",
		);
	}
};

export const createNoteInBlackboard = async (blackboardUid: string) => {
	try {
		const session = await supabase.auth.getSession();

		if (session.error) throw session.error;

		const { data, error } = await supabase
			.from("notes")
			.insert({
				blackboard_uid: blackboardUid,
			})
			.select()
			.single();

		if (error) throw error;

		return data as Note;
	} catch (e) {
		throw new DatabaseError(
			"Something unexpected happened when trying to create a note... Try again later",
		);
	}
};

export const getNoteTextById = async (id: number): Promise<string> => {
	try {
		const session = await supabase.auth.getSession();

		if (session.error) throw session.error;

		const { data, error } = await supabase
			.from("note-text")
			.select("id, text")
			.eq("note_id", id)
			.single();

		if (error) throw error;

		return data.text;
	} catch (e) {
		throw new DatabaseError(
			"Something unexpected happened when trying to get your note's text... Try again later",
		);
	}
};

export const updateNoteTextById = async (id: number, text: string) => {
	try {
		const session = await supabase.auth.getSession();

		if (session.error) throw session.error;

		const { error } = await supabase
			.from("note-text")
			.update({
				text: text,
			})
			.eq("note_id", id);

		if (error) throw error;
	} catch (e) {
		throw new DatabaseError(
			"Something unexpected happened when trying to update your note... Try again later",
		);
	}
};

export const deleteNoteById = async (id: number) => {
	try {
		const session = await supabase.auth.getSession();

		if (session.error) throw session.error;

		const { error } = await supabase.from("notes").delete().eq("id", id);

		if (error) throw error;
	} catch (e) {
		throw new DatabaseError(
			"Something unexpected happened when trying to delete a note... Try again later",
		);
	}
};

export const updateNotePosition = async (id: number, pos: Position) => {
	try {
		const session = await supabase.auth.getSession();

		if (session.error) throw session.error;

		const { error } = await supabase
			.from("notes")
			.update({
				pos: pos,
			})
			.eq("id", id);

		if (error) throw error;
	} catch (e) {
		throw new DatabaseError(
			"Something unexpected happened when trying to update the position... Try again later",
		);
	}
};
