import { Redirect } from "expo-router";
import { LOCAL_STORAGE_KEYS } from "@/constants/localStorageKeys";
import { useLocalStorage } from "@/hooks/Storage/useLocalStorage";
import { useApp } from "@/hooks/App/useApp";
import Spinner from "@/components/ui/globals/Spinner";

// App-Redirecting first guard
const Index = () => {

  const { isFirstTime } = useApp();

  if (isFirstTime === null) return <Spinner />

  if (isFirstTime) return <Redirect href='/(auth)/intro' />

  return <Redirect href='/(auth)/login' />
}



export default Index;