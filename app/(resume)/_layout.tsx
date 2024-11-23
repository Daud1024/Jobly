import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="resume" options={{ headerShown: false }} />
      <Stack.Screen name="vacancy" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
