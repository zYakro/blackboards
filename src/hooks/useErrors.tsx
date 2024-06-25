import { AlertsContext } from "@/context/Alerts/AlertsContext";
import { useContext } from "react";

export const useErrors = () => {
	const { displayAlert } = useContext(AlertsContext);

  const getMessageFromError = (e: unknown) => {
    if(e instanceof Error){
      return e.message
    }

    return 'Something unexpected happened'
  }

  const displayAlertOnError = (e: unknown) => {
    displayAlert('Error', getMessageFromError(e))
  }

  return {
    displayAlertOnError
  }
};
