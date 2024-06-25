import {
	CoreBridge,
	RichText,
	TenTapStartKit,
	Toolbar,
	darkEditorCss,
	darkEditorTheme,
	useEditorBridge,
} from "@10play/tentap-editor";
import React from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";

type ITextEditor = {
	noteColor: string;
	initialText: string;
	onChangeText: (text: string) => void;
};

export const TextEditor = ({
	noteColor,
	onChangeText,
	initialText,
}: ITextEditor) => {
	const editor = useEditorBridge({
		autofocus: false,
		avoidIosKeyboard: true,
		initialContent: initialText,
		theme: {
			...darkEditorTheme,
			webview: {
				backgroundColor: noteColor,
				paddingHorizontal: 5,
			},
		},
		bridgeExtensions: [
			...TenTapStartKit,
			CoreBridge.configureCSS(`
				* {
					color: white
				}
				`),
		],
		onChange: async () => {
			const text = await editor.getHTML();

			onChangeText(text);
		},
	});

	return (
		<View
			className="px-2 flex-1 w-full h-full flex mb-1 rounded-md"
			style={{
				backgroundColor: noteColor,
			}}
		>
			<RichText editor={editor} />
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={{
					position: "absolute",
					width: "104.5%",
					height: 50,
					bottom: 0,
				}}
			>
				<Toolbar hidden={false} editor={editor} />
			</KeyboardAvoidingView>
		</View>
	);
};
