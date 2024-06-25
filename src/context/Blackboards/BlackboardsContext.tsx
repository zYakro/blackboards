import type { Blackboard, Blackboards } from "@/types/types";
import { createContext } from "react";

interface BlackboardsContextProps {
	blackboards: Blackboards;
	currentBlackboard: Blackboard | null;
	getBlackboards: () => Promise<void>;
	setCurrentBlackboard: React.Dispatch<React.SetStateAction<Blackboard | null>>;
	updateCurrentBlackboard: (blackboard: Blackboard) => Promise<void>;
	createNewBlackboard: () => Promise<Blackboard | null>;
	deleteCurrentBlackboard: () => Promise<void>;
}

export const BlackboardsContext = createContext<BlackboardsContextProps>({
	blackboards: [],
	currentBlackboard: null,
	getBlackboards: () => {},
	setCurrentBlackboard: () => {},
	updateCurrentBlackboard: () => {},
	createNewBlackboard: () => {},
	deleteCurrentBlackboard: () => {}
});
