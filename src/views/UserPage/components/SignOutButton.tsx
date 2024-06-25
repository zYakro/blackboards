import { NormalButton } from "@/components/Buttons/NormalButton";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import { useAuth } from "@/hooks/useAuth";
import type { Routes } from "@/types/types";

export const SignOutButton = () => {
	const navigation = useNavigation<NativeStackNavigationProp<Routes>>();

	const { signOut } = useAuth();

	const signOutAndGoToSignInPage = async () => {
		await signOut();
		navigation.navigate("SignIn");
	};

	return (
		<NormalButton
			className="py-3 px-12 w-full"
			onPress={signOutAndGoToSignInPage}
		>
			<Text className="text-textColor text-md font-semibold">Sign Out</Text>
		</NormalButton>
	);
};
