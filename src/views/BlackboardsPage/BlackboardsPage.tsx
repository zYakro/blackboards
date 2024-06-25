import { Background } from "@/components/Background/Background";
import { BlackboardBar } from "@/views/BlackboardsPage/components/BlackboardBar";
import { Blackboards } from "@/views/BlackboardsPage/components/Blackboards";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const BlackboardPage = () => {
	return (
		<Background background="geometry">
			<SafeAreaView>
				<ScrollView>
					<BlackboardBar />
					<Blackboards />
				</ScrollView>
			</SafeAreaView>
		</Background>
	);
};
