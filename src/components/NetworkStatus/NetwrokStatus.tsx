import React, { useState, useEffect } from "react";

interface NetwrokStatuWrappersProps {
  children: any;
  FallbackComponent: any;
}

const NetworkStatusWrapper: React.FC<NetwrokStatuWrappersProps> = ({
  FallbackComponent,
  children,
}) => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    const handleOnlineStatus = () => setIsOnline(true);
    const handleOfflineStatus = () => setIsOnline(false);

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOfflineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOfflineStatus);
    };
  }, []);

  if (!isOnline) {
    if (FallbackComponent) {
      return FallbackComponent;
    }
    return (
      <div style={{ textAlign: "center" }}>
        <p>No Internet Connection</p>
      </div>
    );
  }

  return children;
};

export default NetworkStatusWrapper;
