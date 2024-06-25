import { BlackboardsContext } from "@/context/Blackboards/BlackboardsContext";
import { useContext, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AlertsContext } from "@/context/Alerts/AlertsContext";
import type {
	NativeStackNavigationEventMap,
	NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import {
	type EventListenerCallback,
	type EventMapCore,
	type StackNavigationState,
	useNavigation,
} from "@react-navigation/native";
import { areObjectsEqual } from "@/utils/map.utils";
import { Background } from "@/components/Background/Background";
import { NavigationBar } from "./components/NavigationBar";
import { BlackboardPreview } from "./components/BlackboardPreview";
import { SetTitle } from "./components/SetTitle";
import { SetIcon } from "./components/SetIcon";
import { SetBackground } from "./components/SetBackground";
import type { Backgrounds, Blackboard, Icons, Routes } from "@/types/types";

export const BlackboardConfigPage = () => {
	const {
		currentBlackboard,
		updateCurrentBlackboard,
		deleteCurrentBlackboard,
	} = useContext(BlackboardsContext);
	const { displayAreYouSureAlert } = useContext(AlertsContext);

	const navigation = useNavigation<NativeStackNavigationProp<Routes>>();

	const [blackboard, setBlackboard] = useState(currentBlackboard as Blackboard);

	const setIcon = (icon: Icons) => {
		setBlackboard({ ...blackboard, icon });
	};

	const setTitle = (title: string) => {
		setBlackboard({ ...blackboard, title });
	};

	const setBackground = (background: Backgrounds) => {
		setBlackboard({ ...blackboard, background });
	};

	const confirmDeleteBlackboard = () => {
		displayAreYouSureAlert({
			title: "Do you want to delete this blackboard?",
			message: "You can not undo this action",
			onYes: async () => {
				await deleteCurrentBlackboard();

				navigation.navigate("Blackboards");
			},
			onNo: () => {},
		});
	};

	// TODO fix typo for event
	const saveChangesIfUnsavedChanges = async (event: any) => {
		const hasUnsavedChanges = !areObjectsEqual(
			currentBlackboard as Blackboard,
			blackboard,
		);

		if (!hasUnsavedChanges) {
			return;
		}

		event.preventDefault();

		await updateCurrentBlackboard(blackboard);

		navigation.dispatch(event.data.action);
	};

	useEffect(() => {
		navigation.addListener("beforeRemove", saveChangesIfUnsavedChanges);

		return () => {
			navigation.removeListener("beforeRemove", saveChangesIfUnsavedChanges);
		};
		// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	}, [navigation, saveChangesIfUnsavedChanges]);

	return (
		<Background background="geometry">
			<View className="h-auto w-auto">
				<SafeAreaView className="flex flex-col px-6">
					<ScrollView className="w-full h-full">
						<NavigationBar onDeletePressed={confirmDeleteBlackboard} />
						<SetTitle title={blackboard.title} setTitle={setTitle} />
						<SetIcon setIcon={setIcon} />
						<SetBackground setBackground={setBackground} />
						<BlackboardPreview
							title={blackboard.title}
							icon={blackboard.icon}
							background={blackboard.background}
						/>
					</ScrollView>
				</SafeAreaView>
			</View>
		</Background>
	);
};
