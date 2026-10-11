import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { styles } from "../../styles/home.styles";
import { getPriorityColor } from "./task_helpers";
import type { Task } from "./task_types";

type TaskListProps = {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
};

export function TaskList({ tasks, onToggleTask, onDeleteTask }: TaskListProps) {
  return (
    <View style={styles.taskList}>
      {tasks.length > 0 ? (
        tasks.map((item) => {
          const priorityColor = getPriorityColor(item.priority);

          return (
            <View key={item.id} style={styles.taskCard}>
              <Pressable
                style={[
                  styles.checkbox,
                  item.completed && styles.checkboxCompleted,
                ]}
                onPress={() => onToggleTask(item.id)}
                accessibilityRole="checkbox"
                accessibilityState={{ checked: item.completed }}
              >
                {item.completed && (
                  <Ionicons name="checkmark" size={16} color="#FFFFFF" />
                )}
              </Pressable>
              <View style={styles.taskContent}>
                <Text
                  style={[
                    styles.taskTitle,
                    item.completed && styles.completedTitle,
                  ]}
                  numberOfLines={2}
                >
                  {item.title}
                </Text>
                <View style={styles.taskMeta}>
                  <Text style={styles.categoryText}>{item.category}</Text>
                  <View style={styles.metaDot} />
                  <View style={styles.priorityContainer}>
                    <View
                      style={[
                        styles.priorityDot,
                        { backgroundColor: priorityColor },
                      ]}
                    />
                    <Text
                      style={[styles.priorityText, { color: priorityColor }]}
                    >
                      {item.priority}
                    </Text>
                  </View>
                </View>
              </View>
              <Pressable
                onPress={() => onDeleteTask(item.id)}
                style={styles.deleteButton}
                hitSlop={10}
                accessibilityRole="button"
                accessibilityLabel={`Delete ${item.title}`}
              >
                <Ionicons name="trash-outline" size={18} color="#A3A1AB" />
              </Pressable>
            </View>
          );
        })
      ) : (
        <View style={styles.emptyState}>
          <Ionicons name="clipboard-outline" size={42} color="#AAA4BD" />
          <Text style={styles.emptyTitle}>No tasks found</Text>
          <Text style={styles.emptyDescription}>
            Add a new task and make something happen today.
          </Text>
        </View>
      )}
    </View>
  );
}
