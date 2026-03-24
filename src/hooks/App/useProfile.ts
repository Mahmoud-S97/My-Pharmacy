
import { useState } from "react"
import { userProfileApi } from "@/services/appApi/userProfile";

export const useProfile = () => {

  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getUserProfileHandler = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await userProfileApi();
      if (data) {
        setUserData(data);
      }
    } catch (error: any) {
      setError(error?.message || error.toString() || 'Something went wrong, cannot fetch user data.');
    } finally {
      setIsLoading(false);
    }
  }

  return { getUserProfileHandler, userData, isLoading, error };
}