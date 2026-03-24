import { ENV } from "../../../config/env";
import { API_ENDPOINTS } from "@/constants/api/apiEndPoints";

// Login-API
export const loginApi = async ({ userName, password }: LoginProps): Promise<LoginResponse> => {
  const response = await fetch(`${ENV.AUTH_API_URL}/${API_ENDPOINTS.AUTH_LOGIN}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: userName,
      password,
      expiresInMins: 30
    }),
    credentials: 'include'
  });
  if (!response.ok) {
    if(response.status === 400) {
      throw new Error('Username or Password is incorrect!.');
    } else {
      throw new Error('Login failed!');
    }
  }
  const data = await response.json();

  return data;
}