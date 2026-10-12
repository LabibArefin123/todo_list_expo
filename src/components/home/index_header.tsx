import { Pressable, Text, View } from "react-native";
import { router } from "expo-router";
import { styles } from "../../styles/home.styles";

type HeaderProps = {
  formattedDate: string;
};

export function HomeHeader({ formattedDate }: HeaderProps) {
  const openProfile = () => {
    router.push("/profile");
  };

  return (
    <>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.brandText}>taskflow.</Text>
          <Text style={styles.dateText}>{formattedDate}</Text>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.avatar,
            pressed && { opacity: 0.7, transform: [{ scale: 0.96 }] },
          ]}
          onPress={openProfile}
          accessibilityRole="button"
          accessibilityLabel="Open user profile"
          accessibilityHint="Navigates to your profile screen"
        >
          <Text style={styles.avatarText}>L</Text>
        </Pressable>
      </View>

      {/* Welcome */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeTitle}>
          Make today
          {"\n"}
          <Text style={styles.welcomeAccent}>count.</Text>
        </Text>

        <Text style={styles.welcomeDescription}>
          Stay focused, stay organized and make progress every day.
        </Text>
      </View>
    </>
  );
}
