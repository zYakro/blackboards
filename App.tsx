import { NotesProvider } from "@/context/Notes/NotesProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Navigation } from "@/navigation/Navigation";
import { BlackboardsProvider } from "@/context/Blackboards/BlackboardsProvider";
import { AlertsProvider } from "@/context/Alerts/AlertsProvider";

/// <reference types="nativewind/types" />

export default function App() {
	return (
		<NotesProvider>
			<BlackboardsProvider>
				<SafeAreaProvider>
					<AlertsProvider>
						<Navigation />
					</AlertsProvider>
				</SafeAreaProvider>
			</BlackboardsProvider>
		</NotesProvider>
	);
}
