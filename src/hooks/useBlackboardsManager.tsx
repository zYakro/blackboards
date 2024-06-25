import { useState } from "react";
import {
	createBlackboard,
	deleteBlackboardById,
	getBlackboards as getUserBlackboards,
	updateBlackboard,
} from "@/services/blackboards.service";
import { removeBlackbordFromBlackboardsList, updateBlackboardInBlackboardsList } from "@/utils/blackboard.utils";
import { useErrors } from "./useErrors";
import type { Blackboard, Blackboards } from "@/types/types";

export const useBlackboardsManager = () => {
	const [blackboards, setBlackboards] = useState<Blackboards>([]);
	const [currentBlackboard, setCurrentBlackboard] = useState<Blackboard | null>(
		null,
	);

	const { displayAlertOnError } = useErrors();

	const getBlackboards = async () => {
		try {
			const newBlackboards = await getUserBlackboards();

			setBlackboards(newBlackboards);
		} catch (e) {
			displayAlertOnError(e);
		}
	};

	const updateCurrentBlackboard = async (updatedBlackboard: Blackboard) => {
		if (currentBlackboard === null) {
			return;
		}

		try {
			await updateBlackboard(updatedBlackboard);

			const newBlackboards = updateBlackboardInBlackboardsList(blackboards, updatedBlackboard);

			setBlackboards(newBlackboards);
			setCurrentBlackboard(updatedBlackboard)
		} catch (e) {
			displayAlertOnError(e);
		}
	};

	const createNewBlackboard = async (): Promise<Blackboard | null> => {
		try {
			const newBlackboard = await createBlackboard();

			setBlackboards([...blackboards, newBlackboard]);

			return newBlackboard;
		} catch (e) {
			displayAlertOnError(e);
		}

		return null;
	};

	const deleteCurrentBlackboard = async () => {
		try{
			if(!currentBlackboard){
				return 
			}

			await deleteBlackboardById(currentBlackboard.id)	

			const newList = removeBlackbordFromBlackboardsList(blackboards, currentBlackboard.id)

			setBlackboards(newList)
		}catch(e){
			displayAlertOnError(e)
		}
	}

	return {
		blackboards,
		currentBlackboard,
		setCurrentBlackboard,
		getBlackboards,
		createNewBlackboard,
		updateCurrentBlackboard,
		deleteCurrentBlackboard,
	};
};
