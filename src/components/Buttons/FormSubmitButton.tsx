import { Text, TouchableOpacity } from "react-native";

type IFormSubmitButton = {
	onPress?: () => void;
	children?: React.ReactNode;
};

export const FormSubmitButton = ({ onPress, children }: IFormSubmitButton) => {
	return (
		<TouchableOpacity
			className="px-3 py-2 flex justify-center items-center bg-[#464646] rounded-md"
			onPress={onPress}
		>
			<Text className="text-gray-300 text-md font-semibold">{children}</Text>
		</TouchableOpacity>
	);
};
