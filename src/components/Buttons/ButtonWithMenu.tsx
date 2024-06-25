import type React from "react";
import { useState } from "react";
import {
	Modal,
	ScrollView,
	TouchableOpacity,
	type TouchableOpacityProps,
	View,
	Text,
} from "react-native";

type IButtonWithMenu = {
	buttonChildren?: React.ReactNode;
	menuItems?: React.ReactNode;
	title?: string;
};

const ButtonWithMenu = ({
	buttonChildren,
	menuItems,
	title = "",
}: IButtonWithMenu) => {
	const [isMenuVisible, setIsMenuVisible] = useState(false);

	return (
		<>
			<Button onPress={() => setIsMenuVisible(true)}>{buttonChildren}</Button>
			<Menu
				setIsVisible={setIsMenuVisible}
				isVisible={isMenuVisible}
				title={title}
			>
				{menuItems}
			</Menu>
		</>
	);
};

const Button = (props: TouchableOpacityProps) => {
	return (
		<TouchableOpacity
			className="h-auto w-auto flex justify-center items-center px-1.5"
			{...props}
		/>
	);
};

interface MenuProps {
	title?: string;
	isVisible: boolean;
	setIsVisible: (visible: boolean) => void;
	children: React.ReactNode;
}

const Menu = ({ title = "", isVisible, setIsVisible, children }: MenuProps) => {
	return (
		<>
			{isVisible && (
				<Modal visible={isVisible} animationType="fade" transparent={true}>
					<TouchableOpacity
						onPress={() => setIsVisible(false)}
						className="w-full h-full bg-[#00000041] flex justify-center items-center"
					>
						<View
							className="w-[60%] p-2 flex justify-center items-center border-[#ffffff00] bg-zinc-700 border-[1px] rounded-sm"
							onStartShouldSetResponder={() => true}
						>
							{title && (
								<Text className="text-base font-semibold text-slate-50 w-full mb-2">
									{title}
								</Text>
							)}
							<ScrollView className="w-full h-auto">
								<View className="gap-2 py-3 w-full h-auto flex flex-row justify-start items-start flex-wrap">
									{children}
								</View>
							</ScrollView>
						</View>
					</TouchableOpacity>
				</Modal>
			)}
		</>
	);
};

ButtonWithMenu.Button = Button;
ButtonWithMenu.Menu = Menu;

export { ButtonWithMenu };
