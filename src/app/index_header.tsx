import { Pressable, Text, View } from "react-native";
import { styles } from "../styles/home.styles";

type HeaderProps = {
  formattedDate: string;
};

export function HomeHeader({ formattedDate }: HeaderProps) {
  return (
    <>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.brandText}>taskflow.</Text>
          <Text style={styles.dateText}>{formattedDate}</Text>
        </View>

        <Pressable
          style={styles.avatar}
          accessibilityRole="button"
          accessibilityLabel="User profile"
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
