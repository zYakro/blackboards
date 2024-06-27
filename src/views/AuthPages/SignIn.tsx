import { FormSubmitButton } from "@/components/Buttons/FormSubmitButton";
import { FormInput } from "@/components/Inputs/FormInput";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/supabase/config";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Background } from "@/components/Background/Background";
import type { Routes } from "@/types/types";

export const SignIn = () => {
	const navigation = useNavigation<NativeStackNavigationProp<Routes>>();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isSignedIn, setIsSignedIn] = useState(false);

	const { checkFieldsAndSignIn } = useAuth();

	const onSignIn = async () => {
		const isSuccessful = await checkFieldsAndSignIn(email, password);

		if (isSuccessful) {
			navigation.navigate("Blackboards");
		}

		setEmail("");
		setPassword("");
	};

	useEffect(() => {
		supabase.auth.onAuthStateChange((event) => {
			const isSignedIn = event === "SIGNED_IN" || event === "INITIAL_SESSION";
			if (isSignedIn) {
				return setIsSignedIn(true);
			}
			setIsSignedIn(false);
		});
	}, []);

	return (
		<Background background="geometry">
			{isSignedIn && (
				<SafeAreaView className="w-full flex justify-end items-center absolute px-5 flex-row mt-2">
					<TouchableOpacity
						onPress={() => navigation.navigate("Blackboards")}
						className="flex flex-row items-center justify-center"
					>
						<Text className="text-textColor font-semibold mr-1 text-base">
							Go to dashboard
						</Text>
						<Ionicons name="arrow-forward-circle" size={20} color="white" />
					</TouchableOpacity>
				</SafeAreaView>
			)}
			<View className="w-full h-full flex justify-center items-center">
				<View className="w-4/5 h-auto p-5 py-10 gap-y-1">
					<Text className="text-white font-bold text-2xl">Sign In</Text>
					<View className="h-auto w-full py-2 gap-y-5">
						<FormInput placeholder="Email" onChangeText={setEmail} />
						<FormInput
							placeholder="Password"
							onChangeText={setPassword}
							secureTextEntry={true}
						/>
						<View className="w-full h-auto flex justify-center items-center">
							<FormSubmitButton onPress={onSignIn}>Sign In</FormSubmitButton>
						</View>
						<Text className="text-gray-300">
							Don't have an account?
							<View className="w-[3px]" />
							<Text
								onPress={() => navigation.navigate("SignUp")}
								className="font-semibold"
							>
								Sign Up!
							</Text>
						</Text>
					</View>
				</View>
			</View>
		</Background>
	);
};
