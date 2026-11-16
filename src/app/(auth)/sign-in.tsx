import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-2xl font-bold text-primary">SignIn</Text>
      <Link href="/sign-up" className="mt-4 text-accent">
        Create Account
      </Link>
      <Link href="/" className="mt-4 text-muted-foreground">
        Go back to Home
      </Link>
    </View>
  );
};

export default SignIn;
