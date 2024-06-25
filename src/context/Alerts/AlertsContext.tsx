import { createContext } from "react";

interface AlertContext {
	displayAlert: (title: string, message: string) => void;
	displayAreYouSureAlert: ({title, message, onYes, onNo}: {title: string, message: string, onYes: () => void, onNo: () => void}) => void;
}

export const AlertsContext = createContext<AlertContext>({
	displayAlert: () => {},
  displayAreYouSureAlert: () => {}
});
