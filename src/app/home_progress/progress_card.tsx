import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { styles } from "../../styles/home.styles";
import type { ProgressProps } from "./progress_types";

export function ProgressCard({
  completedCount,
  pendingCount,
  totalTasks,
  progress,
}: ProgressProps) {
  return (
    <View style={styles.progressCard}>
      <View style={styles.progressHeader}>
        <View>
          <Text style={styles.progressLabel}>DAILY PROGRESS</Text>
          <Text style={styles.progressTitle}>You're doing great!</Text>
        </View>
        <View style={styles.progressIcon}>
          <Ionicons name="trending-up" size={22} color="#FFFFFF" />
        </View>
      </View>
      <View style={styles.progressNumbers}>
        <Text style={styles.progressPercent}>
          {Math.round(progress * 100)}%
        </Text>
        <Text style={styles.progressCount}>
          {completedCount} of {totalTasks} tasks completed
        </Text>
      </View>
      <View style={styles.progressTrack}>
        <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
      </View>
      <View style={styles.progressFooter}>
        <Text style={styles.progressFooterText}>
          {pendingCount === 0 && totalTasks > 0
            ? "All tasks completed. Amazing!"
            : `${pendingCount} tasks left to go`}
        </Text>
        <Ionicons name="sparkles" size={16} color="#E9D9FF" />
      </View>
    </View>
  );
}
