import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, TextInput, View } from "react-native";

import { styles } from "../styles/home.styles";

export type Priority = "High" | "Medium" | "Low";
export type Filter = "All" | "Pending" | "Completed";

export type Task = {
  id: string;
  title: string;
  category: string;
  priority: Priority;
  completed: boolean;
  createdAt: string;
};

type TaskSectionProps = {
  tasks: Task[];
  filter: Filter;
  search: string;
  onFilterChange: (filter: Filter) => void;
  onSearchChange: (search: string) => void;
  onAddTask: () => void;
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
};

const filters: Filter[] = ["All", "Pending", "Completed"];

const getPriorityColor = (priority: Priority) => {
  switch (priority) {
    case "High":
      return "#E47777";
    case "Medium":
      return "#D49B48";
    case "Low":
      return "#55A98D";
    default:
      return "#9996A4";
  }
};

export function HomeTasks({
  tasks,
  filter,
  search,
  onFilterChange,
  onSearchChange,
  onAddTask,
  onToggleTask,
  onDeleteTask,
}: TaskSectionProps) {
  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === "All" ||
      (filter === "Pending" && !task.completed) ||
      (filter === "Completed" && task.completed);

    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase().trim());

    return matchesFilter && matchesSearch;
  });

  return (
    <>
      {/* Task Heading */}
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

      {/* Search */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={19} color="#9996A4" />

        <TextInput
          value={search}
          onChangeText={onSearchChange}
          placeholder="Search your tasks..."
          placeholderTextColor="#A5A2AE"
          style={styles.searchInput}
        />

        {search.length > 0 && (
          <Pressable
            onPress={() => onSearchChange("")}
            hitSlop={10}
            accessibilityRole="button"
            accessibilityLabel="Clear search"
          >
            <Ionicons name="close-circle" size={19} color="#9996A4" />
          </Pressable>
        )}
      </View>

      {/* Filters */}
      <View style={styles.filterContainer}>
        {filters.map((item) => (
          <Pressable
            key={item}
            onPress={() => onFilterChange(item)}
            style={[
              styles.filterButton,
              filter === item && styles.filterButtonActive,
            ]}
          >
            <Text
              style={[
                styles.filterText,
                filter === item && styles.filterTextActive,
              ]}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Task List */}
      <View style={styles.taskList}>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((item) => {
            const priorityColor = getPriorityColor(item.priority);

            return (
              <View key={item.id} style={styles.taskCard}>
                {/* Completion Checkbox */}
                <Pressable
                  style={[
                    styles.checkbox,
                    item.completed && styles.checkboxCompleted,
                  ]}
                  onPress={() => onToggleTask(item.id)}
                  accessibilityRole="checkbox"
                  accessibilityState={{
                    checked: item.completed,
                  }}
                >
                  {item.completed && (
                    <Ionicons name="checkmark" size={16} color="#FFFFFF" />
                  )}
                </Pressable>

                {/* Task Details */}
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

                {/* Delete Task */}
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
          /* Empty State */
          <View style={styles.emptyState}>
            <Ionicons name="clipboard-outline" size={42} color="#AAA4BD" />

            <Text style={styles.emptyTitle}>No tasks found</Text>

            <Text style={styles.emptyDescription}>
              Add a new task and make something happen today.
            </Text>
          </View>
        )}
      </View>

      {/* Bottom Message */}
      <View style={styles.bottomMessage}>
        <Ionicons name="heart" size={14} color="#9B83E8" />

        <Text style={styles.bottomMessageText}>
          Small steps lead to big achievements.
        </Text>
      </View>
    </>
  );
}
