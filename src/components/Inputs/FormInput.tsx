import React from "react";
import { TextInput, type TextInputProps } from "react-native";

export const FormInput = (props: TextInputProps) => {
	return (
		<TextInput
			className="text-gray-300 text-md py-1 px-2 bg-[#464646] rounded-md"
      placeholderTextColor="#d1d5db"
			{...props}
		/>
	);
};
