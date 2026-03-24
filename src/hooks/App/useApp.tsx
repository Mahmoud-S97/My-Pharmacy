import { useContext } from "react";
import { AppContext } from "@/store/context/AppContext";

// App data - Hook
export const useApp = () => {
  const appContext = useContext(AppContext);
  if (!appContext) {
    throw new Error('Error => useApp must be used within the AppProvider!');
  }
  return appContext;
}