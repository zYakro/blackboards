import { NotesContext } from "@/context/Notes/NotesContext";
import React, { useContext, useEffect, useState } from "react";
import { Modal, View } from "react-native";
import { SmallButton } from "../Buttons/SmallButton";
import { Ionicons } from "@expo/vector-icons";
import { NOTE_COLORS } from "@/constant/notes";
import { ConfigButtons } from "./components/Configurations";
import { MaterialIcons } from "@expo/vector-icons";
import { TextEditor } from "./components/TextEditor";
import { SectionBar } from "../Menus/SectionBar";
import { AlertsContext } from "@/context/Alerts/AlertsContext";
import { areObjectsEqual } from "@/utils/map.utils";
import { CurrentBlackboardBackground } from "../Background/CurrentBlackboardBackground";
import type { Icons, Note, NoteColors } from "@/types/types";

type IEditor = {
	isVisible: boolean;
	closeEditor: () => void;
};

export const Editor = ({ isVisible, closeEditor }: IEditor) => {
	const {
		currentNote,
		currentNoteText,
		deleteCurrentNote,
		updateCurrentNoteText,
		updateNote,
	} = useContext(NotesContext);

	const { displayAreYouSureAlert } = useContext(AlertsContext);

	const [note, setNote] = useState(currentNote as Note);
	const [noteText, setNoteText] = useState(currentNoteText);

	const noteColor = note ? NOTE_COLORS[note.color] : "";

	const setNoteColor = (color: NoteColors) => {
		setNote({
			...note,
			color: color,
		});
	};

	const setNoteIcon = (icon: Icons) => {
		setNote({
			...note,
			icon: icon,
		});
	};

	const updateNoteValues = async () => {
		if (currentNote === null || note === null) {
			return;
		}

		closeEditor();

		if (!areObjectsEqual(currentNote, note)) {
			await updateNote(note);
		}

		const notesTextAreNotEqual = currentNoteText !== noteText;
		if (notesTextAreNotEqual) {
			await updateCurrentNoteText(noteText);
		}
	};

	const confirmDeleteNote = async () => {
		displayAreYouSureAlert({
			title: "Do you want to delete this note?",
			message: "You can not undo this action",
			onYes: async () => {
				closeEditor();
				await deleteCurrentNote();
			},
			onNo: () => {},
		});
	};

	useEffect(() => {
		if(!currentNote) return

		setNote(currentNote as Note);
	}, [currentNote]);

	return isVisible ? (
		<Modal animationType="slide" transparent={true} visible={isVisible}>
			<CurrentBlackboardBackground>
				<View className="w-full h-full flex justify-center items-center py-4 px-5 flex-column">
					<SectionBar className="w-full h-12 flex items-center justify-start flex-row mb-2">
						<SmallButton onPress={updateNoteValues}>
							<Ionicons name="arrow-back-circle" size={24} color="white" />
						</SmallButton>
						<View className="ml-auto" />
						<ConfigButtons>
							<ConfigButtons.ChangeColor
								currentColor={note.color}
								setColor={setNoteColor}
							/>
							<ConfigButtons.ChangeIcon
								currentIcon={note.icon}
								setIcon={setNoteIcon}
							/>
						</ConfigButtons>
						<SmallButton onPress={confirmDeleteNote}>
							<MaterialIcons name="delete" size={24} color="white" />
						</SmallButton>
					</SectionBar>
					<TextEditor
						noteColor={noteColor}
						initialText={currentNoteText}
						onChangeText={setNoteText}
					/>
				</View>
			</CurrentBlackboardBackground>
		</Modal>
	) : (
		<></>
	);
};
