import { useRef, useState } from "react";
import { AlertsContext } from "./AlertsContext";
import { AlertPanel } from "@/components/Alerts/AlertPanel";
import { AreYouSureAlert } from "@/components/Alerts/AreYouSureAlert";

export const AlertsProvider = ({ children }: { children: React.ReactNode }) => {
	const [title, setTitle] = useState("");
	const [message, setMessage] = useState("");
	const onYesFunction = useRef(() => {});
	const onNoFunction = useRef(() => {});

	const [isAlertPanelVisible, setIsAlertPanelVisible] = useState(false);
	const [isAreYouSurePanelVisible, setIsAreYouSurePanelVisible] =
		useState(false);

	const displayAlert = (title: string, message: string) => {
		setTitle(title);
		setMessage(message);
		setIsAlertPanelVisible(true);
	};

	interface setAreYouSureAlertProps {
		title: string;
		message: string;
		onYes: () => void;
		onNo: () => void;
	}

	const displayAreYouSureAlert = ({
		title,
		message,
		onYes,
		onNo,
	}: setAreYouSureAlertProps) => {
		setTitle(title);
		setMessage(message);
		onYesFunction.current = onYes;
		onNoFunction.current = onNo;
		setIsAreYouSurePanelVisible(true);
	};

	const onNoOption = () => {
		onNoFunction.current();
		setIsAreYouSurePanelVisible(false);
	};

	const onYesOption = () => {
		onYesFunction.current();
		setIsAreYouSurePanelVisible(false);
	};

	return (
		<AlertsContext.Provider value={{ displayAlert, displayAreYouSureAlert }}>
			{children}
			{isAlertPanelVisible && (
				<AlertPanel
					title={title}
					message={message}
					isVisible={true}
					close={() => {
						setIsAlertPanelVisible(false);
					}}
				/>
			)}
			{isAreYouSurePanelVisible && (
				<AreYouSureAlert
					title={title}
					message={message}
					onYes={onYesOption}
					onNo={onNoOption}
					isVisible={true}
					close={() => {
						setIsAreYouSurePanelVisible(false);
					}}
				/>
			)}
		</AlertsContext.Provider>
	);
};
