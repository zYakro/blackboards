import React from "react";
import { Modal, Text, TouchableOpacity } from "react-native";
import { Section } from "../Menus/Section";

interface AlertPanelProps {
	title: string;
	message: string;
	isVisible: boolean;
  close: () => void
}

export const AlertPanel = ({ title, message, isVisible, close }: AlertPanelProps) => {
	return (
		<Modal animationType="slide" visible={isVisible} transparent={true}>
			<TouchableOpacity onPress={close} className="w-full h-full flex justify-center items-center bg-[#0000004f]">
				<Section className="p-2 py-3 w-2/3 rounded-sm flex justify-center items-start">
					<Text className="text-white text-sm font-bold">{title}</Text>
					<Text className="text-white text-sm mt-2">{message}</Text>
				</Section>
			</TouchableOpacity>
		</Modal>
	);
};
