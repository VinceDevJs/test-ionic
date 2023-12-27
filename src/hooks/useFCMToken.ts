import { useEffect, useState } from "react";
import { getToken, isSupported } from "firebase/messaging";
import { messaging } from "../lib/firebase";
import useNotificationPermissionStatus from "./useNotificationPermission";

const useFCMToken = () => {
  const permission = useNotificationPermissionStatus();
  const [fcmToken, setFcmToken] = useState<string | null>(null);

  useEffect(() => {
    const retrieveToken = async () => {
      if (typeof window !== "undefined" && "serviceWorker" in navigator) {
        if (permission === "granted") {
            const isFCMSupported = await isSupported();
            
            if (!isFCMSupported) return;

            const fcmToken = await getToken(
                messaging(),
                { vapidKey: 'BIC5GQyFCrAb4f4yukTE83Xs-fr_AlxKGGXm_gD48bjADSmPrbH5bGVdp4FHybn-e2L3Up5XNWRUjOgoC1sBhu4' }
            );

          setFcmToken(fcmToken);
        }
      }
    };

    retrieveToken();
  }, [permission]);

  return fcmToken;
};

export default useFCMToken;
