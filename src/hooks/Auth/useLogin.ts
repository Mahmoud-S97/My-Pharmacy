import { useState } from "react"
import { loginApi } from "@/services/authApi/login"
import { useAuth } from "./useAuth";


export const useLogin = () => {

  const { login } = useAuth();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async ({ userName, password }: LoginProps) => {
    setIsLoading(true);
    setError(null);
    try {
      const { accessToken } = await loginApi({ userName, password });
      if (accessToken) {
        await login(accessToken);
      }
    } catch (error: any) {
      setError(error?.message || error.toString() || 'Something went wrong, please try again later.');
    } finally {
      setIsLoading(false);
    }
  }

  return { handleLogin, isLoading, error };
}