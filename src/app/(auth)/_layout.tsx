import { Stack, Redirect } from "expo-router";
import { useAuth } from '@/hooks/Auth/useAuth';
import Spinner from "@/components/ui/globals/Spinner";


export default function AuthLayout() {

  // App redirecting based on the user auth-flow
  const { isLoading, isLoggedIn, authToken } = useAuth();

  if (isLoading) return <Spinner />

  if (isLoggedIn) return <Redirect href='/(tabs)/home' />

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='intro' />
      <Stack.Screen name='sign-up' />
      <Stack.Screen name='login' />
    </Stack>
  )
}