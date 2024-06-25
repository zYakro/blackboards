import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { getUserEmailFromSession } from "@/services/auth.service";

export const UserEmail = () => {
  const [email, setEmail] = useState('')

	const getAndSetCurrentUserEmail = async () => {
		const currentUserEmail = await getUserEmailFromSession();

		setEmail(currentUserEmail);
	};

	useEffect(() => {
		getAndSetCurrentUserEmail();
	}, []);

	return (
		<View className="flex-col justify-around items-center py-8 mb-4">
			<View className="border-2 border-white rounded-[100px] py-2 px-4">
				<FontAwesome name="user" size={50} color="white" />
			</View>
			<Text className="text-textColor text-md mt-2">{email}</Text>
		</View>
	);
};
