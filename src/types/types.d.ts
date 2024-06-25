import type { BACKGROUND_PROPS } from "@/constant/backgrounds";
import type { ICONS } from "@/constant/icons";
import type { NOTE_COLORS } from "@/constant/notes";

type NoteColors = keyof typeof NOTE_COLORS
type Icons = keyof typeof ICONS
type NoteTypes = "note" | "envelope";
type Backgrounds = keyof typeof BACKGROUND_PROPS

type Note = {
	id: number;
	color: NoteColors;
	type: NoteTypes;
	icon: Icons;
	pos: Position;
};

type Notes = Note[];

type Position = {
	x: number;
	y: number;
};

type NotesInfo = NoteInfo[];

type Routes = {
	Blackboards;
	Notes;
	SignIn;
	SignUp;
	BlackboardConfig;
	User;
};

interface Blackboard {
	id: number;
	uid: string;
	title: string;
	icon: Icons
	background: Backgrounds
}

type Blackboards = Blackboard[];
