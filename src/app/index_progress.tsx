import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { styles } from "../styles/home.styles";

type ProgressProps = {
  completedCount: number;
  pendingCount: number;
  totalTasks: number;
  progress: number;
};

export function HomeProgress({
  completedCount,
  pendingCount,
  totalTasks,
  progress,
}: ProgressProps) {
  return (
    <>
      {/* Progress Card */}
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
          <View
            style={[styles.progressFill, { width: `${progress * 100}%` }]}
          />
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

      {/* Statistics */}
      <View style={styles.statsContainer}>
        {/* Pending */}
        <View style={styles.statCard}>
          <View style={styles.statIconPending}>
            <Ionicons name="time-outline" size={19} color="#9A7AE9" />
          </View>

          <Text style={styles.statValue}>{pendingCount}</Text>
          <Text style={styles.statLabel}>Pending</Text>
        </View>

        {/* Completed */}
        <View style={styles.statCard}>
          <View style={styles.statIconCompleted}>
            <Ionicons
              name="checkmark-circle-outline"
              size={19}
              color="#49A88B"
            />
          </View>

          <Text style={styles.statValue}>{completedCount}</Text>
          <Text style={styles.statLabel}>Completed</Text>
        </View>

        {/* Total */}
        <View style={styles.statCard}>
          <View style={styles.statIconTotal}>
            <Ionicons name="layers-outline" size={19} color="#D29B4B" />
          </View>

          <Text style={styles.statValue}>{totalTasks}</Text>
          <Text style={styles.statLabel}>Total</Text>
        </View>
      </View>
    </>
  );
}
