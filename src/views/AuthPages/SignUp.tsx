import { Background } from "@/components/Background/Background";
import { FormSubmitButton } from "@/components/Buttons/FormSubmitButton";
import { FormInput } from "@/components/Inputs/FormInput";
import { useAuth } from "@/hooks/useAuth";
import type { Routes } from "@/types/types";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Text, View } from "react-native";

export const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmation, setConfirmation] = useState("");

	const navigation = useNavigation<NativeStackNavigationProp<Routes>>();

	const { signUpAndCheckFields } = useAuth();

	const goToSignInPage = () => navigation.navigate("SignIn");

	const onSignUp = async () => {
		const isSuccessful = await signUpAndCheckFields(
			email,
			password,
			confirmation,
		);

		if (isSuccessful) {
			navigation.navigate("Blackboards");
		}

		setEmail("");
		setPassword("");
		setConfirmation("");
	};

	return (
		<Background background="geometry">
			<View className="w-full h-full flex justify-center items-center">
				<View className="w-4/5 h-auto p-5 py-10 gap-y-1">
					<Text className="text-white font-bold text-2xl">Sign Up</Text>
					<View className="h-auto w-full py-2 gap-y-5">
						<FormInput placeholder="Email" onChangeText={setEmail} />
						<FormInput
							placeholder="Password"
							onChangeText={setPassword}
							secureTextEntry={true}
						/>
						<FormInput
							placeholder="Confirm Password"
							onChangeText={setConfirmation}
							secureTextEntry={true}
						/>
						<View className="w-full h-auto flex justify-center items-center">
							<FormSubmitButton onPress={onSignUp}>Sign Up</FormSubmitButton>
						</View>
						<Text className="text-gray-300">
							You already have an account?
							<View className="w-[3px]" />
							<Text onPress={goToSignInPage} className="font-semibold">
								Sign in!
							</Text>
						</Text>
					</View>
				</View>
			</View>
		</Background>
	);
};
