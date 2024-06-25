import type React from "react";
import { useContext } from "react";
import { Background } from "./Background";
import { BlackboardsContext } from "@/context/Blackboards/BlackboardsContext";

export const CurrentBlackboardBackground = ({
	children,
}: { children: React.ReactNode }) => {
	const { currentBlackboard } = useContext(BlackboardsContext);

  const background = (currentBlackboard) ? currentBlackboard?.background : 'default'

	return (
		<Background background={background}>
			{children}
		</Background>
	);
};
