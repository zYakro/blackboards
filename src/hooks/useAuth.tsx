import {
	signUp as sendSignUp,
	singIn as sendSignIn,
	signOut as sendSignOut,
} from "@/services/auth.service";
import { useState } from "react";
import { useErrors } from "./useErrors";
import { ValidationError } from "@/services/error.service";

export const useAuth = () => {
	const [isWaiting, setIsWaiting] = useState(false);

	const { displayAlertOnError } = useErrors();

	const checkFieldsAndSignIn = async (
		email: string,
		password: string,
	): Promise<boolean> => {
		if (isWaiting) {
			return false;
		}

		try {
			setIsWaiting(true);

			checkSignInFields(email, password);

			await sendSignIn(email, password);

			setIsWaiting(true);

			return true;
		} catch (e) {
			displayAlertOnError(e);

			setIsWaiting(false);

			return false;
		}
	};

	const checkSignInFields = (email: string, password: string) => {
		if (!email) {
			throw new ValidationError("Email field is empty");
		}

		if (!password) {
			throw new ValidationError("Password field is empty");
		}
	};

	const checkFieldsAndSignUp = async (
		email: string,
		password: string,
		confirmation: string,
	): Promise<boolean> => {
		if (isWaiting) {
			return false;
		}

		try {
			setIsWaiting(true);

			checkSignUpFields(email, password, confirmation);

			await sendSignUp(email, password, confirmation);

			setIsWaiting(true);

			return true;
		} catch (e) {
			displayAlertOnError(e);

			setIsWaiting(false);

			return false;
		}
	};

	const checkSignUpFields = (
		email: string,
		password: string,
		confirmation: string,
	) => {
		if (!email) {
			throw new ValidationError("Email field is empty");
		}

		if (!password) {
			throw new ValidationError("Password field is empty");
		}

		if (password !== confirmation) {
			throw new ValidationError("Passwords doesn't match");
		}
	};

	const signOut = async () => {
		try {
			await sendSignOut();
		} catch (e) {
			displayAlertOnError(e);
		}
	};

	return {
		isWaiting,
		checkFieldsAndSignIn,
		checkFieldsAndSignUp,
		signOut,
	};
};
