import { supabase } from "@/supabase/config";
import { DatabaseError } from "./error.service";
import type { Blackboard, Blackboards } from "@/types/types";

export const getBlackboards = async (): Promise<Blackboards> => {
	try {
		const session = await supabase.auth.getSession();

		if (session.error) throw session.error;

		const { data, error } = await supabase
			.from("blackboards")
			.select("id, uid, title, icon, background")
			.eq("user_id", session.data.session?.user.id);

		if (error) throw error;

		return data as Blackboards;
	} catch (e) {
		throw new DatabaseError(
			"Something unexpected happened when trying to get your blackboards... Try again later",
		);
	}
};

export const updateBlackboard = async (blackboard: Blackboard) => {
	try {
		const session = await supabase.auth.getSession();

		if (session.error) throw session.error;

		const { error } = await supabase
			.from("blackboards")
			.update(blackboard)
			.eq("id", blackboard.id);

		if (error) throw error;
	} catch (e) {
		throw new DatabaseError(
			"Something unexpected happened when trying to update the blackboard... Try again later",
		);
	}
};

export const createBlackboard = async (): Promise<Blackboard> => {
	try {
		const session = await supabase.auth.getSession();

		if (session.error) throw session.error;

		const { data, error } = await supabase
			.from("blackboards")
			.insert({})
			.select()
			.single();

		if (error) throw error;

		return data as Blackboard;
	} catch (e) {
		throw new DatabaseError(
			"Something unexpected happened when trying to create a blackboard... Try again later",
		);
	}
};

export const deleteBlackboardById = async (id: number) => {
	try {
		const session = await supabase.auth.getSession();

		if (session.error) throw session.error;

		const { error } = await supabase.from("blackboards").delete().eq("id", id);

		if (error) throw error;
	} catch (e) {
		throw new DatabaseError(
			"Something unexpected happened when trying to delete a blackboard... Try again later",
		);
	}
};
