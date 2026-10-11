import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { styles } from "../../styles/home.styles";

type TaskSectionHeaderProps = {
  onAddTask: () => void;
};

export function TaskSectionHeader({ onAddTask }: TaskSectionHeaderProps) {
  return (
    <View style={styles.sectionHeader}>
      <View>
        <Text style={styles.sectionTitle}>My Tasks</Text>
        <Text style={styles.sectionSubtitle}>
          Keep your priorities in check.
        </Text>
      </View>
      <Pressable
        style={styles.addButton}
        onPress={onAddTask}
        accessibilityRole="button"
      >
        <Ionicons name="add" size={20} color="#FFFFFF" />
        <Text style={styles.addButtonText}>Add task</Text>
      </Pressable>
    </View>
  );
}
