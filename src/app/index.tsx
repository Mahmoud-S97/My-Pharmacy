import { Text } from 'react-native';
import { useAuth } from "@/hooks/Auth/useAuth";
import { Redirect } from "expo-router";

const Index = () => {

  // App redirecting based on the user auth-flow
  const { isLoading, isLoggedIn } = useAuth();

  console.log('isLoggedIn?: ', isLoggedIn);

  if(isLoading) return <Text>Loading</Text>

  if(isLoggedIn) return <Redirect href='/(tabs)/home' />

  return <Redirect href='/(auth)/intro' />
}

export default Index;