import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { styles } from "../../styles/home.styles";
import type { ProgressProps } from "./progress_types";

export function ProgressStatistics({
  completedCount,
  pendingCount,
  totalTasks,
}: ProgressProps) {
  return (
    <View style={styles.statsContainer}>
      <View style={styles.statCard}>
        <View style={styles.statIconPending}>
          <Ionicons name="time-outline" size={19} color="#9A7AE9" />
        </View>
        <Text style={styles.statValue}>{pendingCount}</Text>
        <Text style={styles.statLabel}>Pending</Text>
      </View>
      <View style={styles.statCard}>
        <View style={styles.statIconCompleted}>
          <Ionicons name="checkmark-circle-outline" size={19} color="#49A88B" />
        </View>
        <Text style={styles.statValue}>{completedCount}</Text>
        <Text style={styles.statLabel}>Completed</Text>
      </View>
      <View style={styles.statCard}>
        <View style={styles.statIconTotal}>
          <Ionicons name="layers-outline" size={19} color="#D29B4B" />
        </View>
        <Text style={styles.statValue}>{totalTasks}</Text>
        <Text style={styles.statLabel}>Total</Text>
      </View>
    </View>
  );
}
