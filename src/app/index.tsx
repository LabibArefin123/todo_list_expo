import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useMemo, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "../styles/home.styles";

type Priority = "High" | "Medium" | "Low";
type Filter = "All" | "Pending" | "Completed";

type Task = {
  id: string;
  title: string;
  category: string;
  priority: Priority;
  completed: boolean;
  createdAt: string;
};

const STORAGE_KEY = "@taskflow_tasks";

const initialTasks: Task[] = [
  {
    id: "1",
    title: "Review project requirements",
    category: "Work",
    priority: "High",
    completed: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Complete UI design",
    category: "Design",
    priority: "High",
    completed: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Read 20 pages of a book",
    category: "Personal",
    priority: "Low",
    completed: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Check project progress",
    category: "Work",
    priority: "Medium",
    completed: false,
    createdAt: new Date().toISOString(),
  },
];

const categories = ["Work", "Personal", "Design", "Study", "Health"];
const priorities: Priority[] = ["High", "Medium", "Low"];

const formattedDate = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
});

export default function HomeScreen() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [filter, setFilter] = useState<Filter>("All");
  const [search, setSearch] = useState("");

  const [modalVisible, setModalVisible] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskCategory, setTaskCategory] = useState("Work");
  const [taskPriority, setTaskPriority] = useState<Priority>("Medium");

  // Load saved tasks
  useEffect(() => {
    let isMounted = true;

    const loadTasks = async () => {
      try {
        const savedTasks = await AsyncStorage.getItem(STORAGE_KEY);

        if (!isMounted) return;

        if (savedTasks) {
          const parsedTasks: unknown = JSON.parse(savedTasks);

          if (Array.isArray(parsedTasks)) {
            setTasks(parsedTasks as Task[]);
          } else {
            setTasks(initialTasks);
          }
        } else {
          setTasks(initialTasks);
        }
      } catch (error) {
        console.error("Failed to load tasks:", error);

        if (isMounted) {
          setTasks(initialTasks);
        }
      } finally {
        if (isMounted) {
          setLoaded(true);
        }
      }
    };

    loadTasks();

    return () => {
      isMounted = false;
    };
  }, []);

  // Save tasks after initial loading
  useEffect(() => {
    if (!loaded) return;

    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks)).catch(
      (error) => {
        console.error("Failed to save tasks:", error);
      },
    );
  }, [tasks, loaded]);

  // Statistics
  const completedCount = tasks.filter((task) => task.completed).length;
  const pendingCount = tasks.length - completedCount;
  const progress = tasks.length ? completedCount / tasks.length : 0;

  // Filter and search tasks
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesFilter =
        filter === "All" ||
        (filter === "Pending" && !task.completed) ||
        (filter === "Completed" && task.completed);

      const matchesSearch = task.title
        .toLowerCase()
        .includes(search.toLowerCase().trim());

      return matchesFilter && matchesSearch;
    });
  }, [tasks, filter, search]);

  // Toggle task completion
  const toggleTask = (id: string) => {
    setTasks((previous) =>
      previous.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task,
      ),
    );
  };

  // Delete task
  const deleteTask = (id: string) => {
    Alert.alert(
      "Delete task",
      "Are you sure you want to delete this task?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            setTasks((previous) =>
              previous.filter((task) => task.id !== id),
            );
          },
        },
      ],
    );
  };

  // Add new task
  const addTask = () => {
    const title = taskTitle.trim();

    if (!title) {
      Alert.alert("Task required", "Please enter a task name.");
      return;
    }

    const newTask: Task = {
      id: `${Date.now()}`,
      title,
      category: taskCategory,
      priority: taskPriority,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks((previous) => [newTask, ...previous]);

    setTaskTitle("");
    setTaskCategory("Work");
    setTaskPriority("Medium");
    setModalVisible(false);
  };

  // Render individual task
  const renderTask = (item: Task) => {
    const priorityColor =
      item.priority === "High"
        ? "#E47777"
        : item.priority === "Medium"
          ? "#D49B48"
          : "#55A98D";

    return (
      <View key={item.id} style={styles.taskCard}>
        <Pressable
          style={[
            styles.checkbox,
            item.completed && styles.checkboxCompleted,
          ]}
          onPress={() => toggleTask(item.id)}
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
                style={[
                  styles.priorityText,
                  { color: priorityColor },
                ]}
              >
                {item.priority}
              </Text>
            </View>
          </View>
        </View>

        <Pressable
          onPress={() => deleteTask(item.id)}
          style={styles.deleteButton}
          hitSlop={10}
          accessibilityRole="button"
          accessibilityLabel={`Delete ${item.title}`}
        >
          <Ionicons name="trash-outline" size={18} color="#A3A1AB" />
        </Pressable>
      </View>
    );
  };

  // Loading screen
  if (!loaded) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Text style={styles.brandText}>taskflow.</Text>
        <Text style={styles.loadingText}>Preparing your day...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.brandText}>taskflow.</Text>
              <Text style={styles.dateText}>{formattedDate}</Text>
            </View>

            <Pressable style={styles.avatar}>
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

          {/* Progress Card */}
          <View style={styles.progressCard}>
            <View style={styles.progressHeader}>
              <View>
                <Text style={styles.progressLabel}>DAILY PROGRESS</Text>
                <Text style={styles.progressTitle}>
                  You're doing great!
                </Text>
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
                {completedCount} of {tasks.length} tasks completed
              </Text>
            </View>

            <View style={styles.progressTrack}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${progress * 100}%` },
                ]}
              />
            </View>

            <View style={styles.progressFooter}>
              <Text style={styles.progressFooterText}>
                {pendingCount === 0 && tasks.length > 0
                  ? "All tasks completed. Amazing!"
                  : `${pendingCount} tasks left to go`}
              </Text>

              <Ionicons name="sparkles" size={16} color="#E9D9FF" />
            </View>
          </View>

          {/* Statistics */}
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
                <Ionicons
                  name="checkmark-circle-outline"
                  size={19}
                  color="#49A88B"
                />
              </View>

              <Text style={styles.statValue}>{completedCount}</Text>
              <Text style={styles.statLabel}>Completed</Text>
            </View>

            <View style={styles.statCard}>
              <View style={styles.statIconTotal}>
                <Ionicons name="layers-outline" size={19} color="#D29B4B" />
              </View>

              <Text style={styles.statValue}>{tasks.length}</Text>
              <Text style={styles.statLabel}>Total</Text>
            </View>
          </View>

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
              onPress={() => setModalVisible(true)}
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
              onChangeText={setSearch}
              placeholder="Search your tasks..."
              placeholderTextColor="#A5A2AE"
              style={styles.searchInput}
            />

            {search.length > 0 && (
              <Pressable onPress={() => setSearch("")}>
                <Ionicons
                  name="close-circle"
                  size={19}
                  color="#9996A4"
                />
              </Pressable>
            )}
          </View>

          {/* Filters */}
          <View style={styles.filterContainer}>
            {(["All", "Pending", "Completed"] as Filter[]).map((item) => (
              <Pressable
                key={item}
                onPress={() => setFilter(item)}
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
              filteredTasks.map((item) => renderTask(item))
            ) : (
              <View style={styles.emptyState}>
                <Ionicons
                  name="clipboard-outline"
                  size={42}
                  color="#AAA4BD"
                />

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
        </ScrollView>
      </View>

      {/* Add Task Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <KeyboardAvoidingView
          style={styles.modalOverlay}
          behavior={Platform.select({
            ios: "padding",
            android: "height",
            web: undefined,
            default: undefined,
          })}
        >
          <Pressable
            style={styles.modalBackdrop}
            onPress={() => setModalVisible(false)}
          />

          <View style={styles.modalContent}>
            <View style={styles.modalHandle} />

            <View style={styles.modalHeader}>
              <View>
                <Text style={styles.modalTitle}>Create a task</Text>

                <Text style={styles.modalSubtitle}>
                  Make your next move count.
                </Text>
              </View>

              <Pressable
                onPress={() => setModalVisible(false)}
                style={styles.modalClose}
              >
                <Ionicons name="close" size={21} color="#686576" />
              </Pressable>
            </View>

            <Text style={styles.inputLabel}>TASK NAME</Text>

            <TextInput
              value={taskTitle}
              onChangeText={setTaskTitle}
              placeholder="What needs to be done?"
              placeholderTextColor="#AAA7B3"
              style={styles.modalInput}
              autoFocus
              maxLength={100}
              returnKeyType="done"
              onSubmitEditing={addTask}
            />

            <Text style={styles.inputLabel}>CATEGORY</Text>

            <View style={styles.optionContainer}>
              {categories.map((category) => (
                <Pressable
                  key={category}
                  onPress={() => setTaskCategory(category)}
                  style={[
                    styles.optionButton,
                    taskCategory === category && styles.optionButtonActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.optionText,
                      taskCategory === category && styles.optionTextActive,
                    ]}
                  >
                    {category}
                  </Text>
                </Pressable>
              ))}
            </View>

            <Text style={styles.inputLabel}>PRIORITY</Text>

            <View style={styles.priorityOptions}>
              {priorities.map((priority) => (
                <Pressable
                  key={priority}
                  onPress={() => setTaskPriority(priority)}
                  style={[
                    styles.priorityOption,
                    taskPriority === priority && styles.priorityOptionActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.optionText,
                      taskPriority === priority && styles.optionTextActive,
                    ]}
                  >
                    {priority}
                  </Text>
                </Pressable>
              ))}
            </View>

            <Pressable style={styles.submitButton} onPress={addTask}>
              <Ionicons
                name="add-circle-outline"
                size={20}
                color="#FFFFFF"
              />

              <Text style={styles.submitButtonText}>Create task</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  );
}
