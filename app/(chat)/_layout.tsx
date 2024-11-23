import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="mainchat" options={{ headerShown: false }} />
      <Stack.Screen name="BrowseCandidates" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
