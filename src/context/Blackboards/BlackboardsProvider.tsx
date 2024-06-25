import { useState } from "react";
import { BlackboardsContext } from "./BlackboardsContext";
import { useBlackboardsManager } from "@/hooks/useBlackboardsManager";

export const BlackboardsProvider = ({
	children,
}: { children: React.ReactNode }) => {
	const {
		blackboards,
		currentBlackboard,
		setCurrentBlackboard,
		getBlackboards,
		updateCurrentBlackboard,
		createNewBlackboard,
		deleteCurrentBlackboard,
	} = useBlackboardsManager();

	return (
		<BlackboardsContext.Provider
			value={{
				blackboards,
				currentBlackboard,
				setCurrentBlackboard,
				getBlackboards,
				updateCurrentBlackboard,
				createNewBlackboard,
				deleteCurrentBlackboard,
			}}
		>
			{children}
		</BlackboardsContext.Provider>
	);
};
