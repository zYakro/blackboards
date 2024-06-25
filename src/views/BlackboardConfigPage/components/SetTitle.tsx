import React from "react";
import { SectionContainer } from "../containers/SectionContainer";
import { MAX_TITLE_LENGTH } from "@/constant/blackboards";
import { TextInput } from "react-native";

interface SetTitleProps {
	title: string;
	setTitle: (title: string) => void;
}

export const SetTitle = ({ title, setTitle }: SetTitleProps) => {
	return (
		<SectionContainer>
			<TextInput
				placeholder="Set a title!"
				placeholderTextColor={"#eee"}
				className="text-slate-50 text-base mx-1 font-semibold py-2 border-textColor border-b-[1px] rounded-sm"
				onChangeText={setTitle}
				maxLength={MAX_TITLE_LENGTH}
			>
				{title}
			</TextInput>
		</SectionContainer>
	);
};
