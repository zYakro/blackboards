import { BlackboardConfigPage } from "@/views/BlackboardConfigPage/BlackboardConfigPage";
import { BlackboardPage } from "@/views/BlackboardsPage/BlackboardsPage";
import { SignIn } from "@/views/AuthPages/SignIn";
import { SignUp } from "@/views/AuthPages/SignUp";
import { UserPage } from "@/views/UserPage/UserPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NotesPage } from "@/views/NotesPage/NotesPage";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
				initialRouteName="SignIn"
			>
				<Stack.Screen name="SignIn" component={SignIn} />
				<Stack.Screen name="SignUp" component={SignUp} />
				<Stack.Screen name="Blackboards" component={BlackboardPage} />
				<Stack.Screen name="Notes" component={NotesPage} />
				<Stack.Screen name="BlackboardConfig" component={BlackboardConfigPage} />
				<Stack.Screen name="User" component={UserPage} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
