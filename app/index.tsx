// app/index.tsx
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      // For now, hardcode login status or get from storage
      // const isLoggedIn = false; // Replace with real check!

      // if (isLoggedIn) {
      //   router.replace('/dashboard');  // Or your main app page
      // } else {
        router.replace('/login');
      // }
    };

    checkAuth();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: '#fff'}}>
      <ActivityIndicator size="large" color="#007AFF" />
      <Text style={{marginTop: 16, fontSize: 16, color: '#666'}}>Loading...</Text>
    </View>
  );
}
