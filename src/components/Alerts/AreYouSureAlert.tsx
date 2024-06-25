import { Modal, Text, TouchableOpacity, View } from "react-native";
import { Section } from "../Menus/Section";
import { DeleteButton } from "../Buttons/DeleteButton";
import { NormalButton } from "../Buttons/NormalButton";

interface AreYouSureAlertProps {
	title: string;
	message: string;
	isVisible: boolean;
	onYes: () => void;
	onNo: () => void;
	close: () => void;
}

export const AreYouSureAlert = ({
	title,
	message,
	isVisible,
	onYes,
	onNo,
	close,
}: AreYouSureAlertProps) => {
	return (
		<Modal animationType="slide" visible={isVisible} transparent={true}>
			<TouchableOpacity
				onPress={() => close()}
				className="w-full h-full flex justify-center items-center bg-[#0000004f]"
			>
				<Section className="p-2 py-3 w-2/3 rounded-sm flex justify-center items-start">
					<Text className="text-white text-sm font-bold">{title}</Text>
					<Text className="text-white text-sm">{message}</Text>
					<View className="w-full flex flex-row justify-around my-2">
						<DeleteButton onPress={onYes} >
							<Text className="text-white text-sm font-bold">Yes</Text>
						</DeleteButton>
						<NormalButton onPress={onNo}>
							<Text className="text-white text-sm font-bold">No</Text>
						</NormalButton>
					</View>
				</Section>
			</TouchableOpacity>
		</Modal>
	);
};
