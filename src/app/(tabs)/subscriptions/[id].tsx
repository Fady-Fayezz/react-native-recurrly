import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const SubscriptionsDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-primary">Subscriptions Details: {id}</Text>
      <Link href="/" className="mt-4 text-accent">Go back</Link>
    </View>
  );
};

export default SubscriptionsDetails;
