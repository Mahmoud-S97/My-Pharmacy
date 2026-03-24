import { useSecureStorage } from "@/hooks/Auth/useSecureStorage";
import { ENV } from "../../../config/env";
import { API_ENDPOINTS } from "@/constants/api/apiEndPoints";
import { LOCAL_STORAGE_KEYS } from "@/constants/localStorageKeys";

// UserProfile-API
export const userProfileApi = async (): Promise<any> => {

  const { getDataSecurely } = useSecureStorage();
  const accessToken = await getDataSecurely(LOCAL_STORAGE_KEYS.AUTH_TOKEN);

  console.log('Key:: ', accessToken);

  const response = await fetch(`${ENV.AUTH_API_URL}/${API_ENDPOINTS.USER_PROFILE}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    },
    credentials: 'include'
  });
  console.log('User-Response: ', response);
  if (!response.ok) {
    throw new Error('Fetching profile data failed, please try again later.');
  }
  const data = await response.json();

  return data;
}