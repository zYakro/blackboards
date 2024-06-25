import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "@/components/Background/Background";
import { NavigationBar } from "./components/NavigationBar";
import { UserEmail } from "./components/UserEmail";
import { SignOutButton } from "./components/SignOutButton";

export const UserPage = () => {
	return (
		<Background background="geometry">
			<SafeAreaView className="h-full w-full py-5 px-8 items-center">
				<NavigationBar />
				<UserEmail />
				<SignOutButton />
			</SafeAreaView>
		</Background>
	);
};
