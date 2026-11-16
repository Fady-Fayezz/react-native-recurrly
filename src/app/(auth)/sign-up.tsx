import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignUp = () => {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-2xl font-bold text-primary">SignUp</Text>
      <Link href="/sign-in" className="mt-4 text-accent">
        Sign In
      </Link>
      <Link href="/" className="mt-4 text-muted-foreground">
        Go back to Home
      </Link>
    </View>
  );
};

export default SignUp;
