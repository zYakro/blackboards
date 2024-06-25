import type { Blackboard, Blackboards } from "@/types/types";

export const updateBlackboardInBlackboardsList = (
	blackboards: Blackboards,
	updatedBlackboard: Blackboard,
) => {
	return blackboards.map((item) => {
		if (item.id === updatedBlackboard.id) {
			return updatedBlackboard;
		}
		return item;
	});
};

export const removeBlackbordFromBlackboardsList = (blackboards: Blackboards, id: number) => {
	return blackboards.filter(blackboard => {
		if(blackboard.id === id){
			return;
		}
		return blackboard;
	})
}