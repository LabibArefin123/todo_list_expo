import { useEffect, useState } from "react";

import { Alert, ScrollView, Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "../styles/home.styles";

// UI Components
import { HomeHeader } from "./index_header";
import { HomeTaskModal } from "./index_modal";
import { HomeProgress } from "./index_progress";
import {
  HomeTasks,
  type Filter,
  type Priority,
  type Task,
} from "./index_tasks";

// Home Helpers
import { formattedDate } from "./home/home_constants";

import { loadTasks, saveTasks } from "./home/home_storage";

import {
  createTask,
  removeTask,
  toggleTask as toggleTaskAction,
} from "./home/home_actions";

export default function HomeScreen() {
  // Task State
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Filter and Search
  const [filter, setFilter] = useState<Filter>("All");
  const [search, setSearch] = useState("");

  // Modal State
  const [modalVisible, setModalVisible] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskCategory, setTaskCategory] = useState("Work");
  const [taskPriority, setTaskPriority] = useState<Priority>("Medium");

  // Load Tasks
  useEffect(() => {
    let isMounted = true;

    const initializeTasks = async () => {
      const savedTasks = await loadTasks();

      if (isMounted) {
        setTasks(savedTasks);
        setLoaded(true);
      }
    };

    initializeTasks();

    return () => {
      isMounted = false;
    };
  }, []);

  // Save Tasks
  useEffect(() => {
    if (!loaded) return;

    saveTasks(tasks);
  }, [tasks, loaded]);

  // Statistics
  const completedCount = tasks.filter((task) => task.completed).length;

  const pendingCount = tasks.length - completedCount;

  const progress = tasks.length ? completedCount / tasks.length : 0;

  // Toggle Task Completion
  const handleToggleTask = (id: string) => {
    setTasks((previous) => toggleTaskAction(previous, id));
  };

  // Delete Task
  const handleDeleteTask = (id: string) => {
    Alert.alert("Delete task", "Are you sure you want to delete this task?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          setTasks((previous) => removeTask(previous, id));
        },
      },
    ]);
  };

  // Open Add Task Modal
  const openModal = () => {
    setTaskTitle("");
    setTaskCategory("Work");
    setTaskPriority("Medium");
    setModalVisible(true);
  };

  // Close Modal
  const closeModal = () => {
    setModalVisible(false);
  };

  // Add New Task
  const handleAddTask = () => {
    const title = taskTitle.trim();

    if (!title) {
      Alert.alert("Task required", "Please enter a task name.");
      return;
    }

    const newTask = createTask(title, taskCategory, taskPriority);

    setTasks((previous) => [newTask, ...previous]);

    setTaskTitle("");
    setTaskCategory("Work");
    setTaskPriority("Medium");
    setModalVisible(false);
  };

  // Loading Screen
  if (!loaded) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Text style={styles.brandText}>taskflow.</Text>

        <Text style={styles.loadingText}>Preparing your day...</Text>
      </SafeAreaView>
    );
  }

  // Main Screen
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header */}
          <HomeHeader formattedDate={formattedDate} />

          {/* Progress and Statistics */}
          <HomeProgress
            completedCount={completedCount}
            pendingCount={pendingCount}
            totalTasks={tasks.length}
            progress={progress}
          />

          {/* Tasks */}
          <HomeTasks
            tasks={tasks}
            filter={filter}
            search={search}
            onFilterChange={setFilter}
            onSearchChange={setSearch}
            onAddTask={openModal}
            onToggleTask={handleToggleTask}
            onDeleteTask={handleDeleteTask}
          />
        </ScrollView>
      </View>

      {/* Add Task Modal */}
      <HomeTaskModal
        visible={modalVisible}
        taskTitle={taskTitle}
        taskCategory={taskCategory}
        taskPriority={taskPriority}
        onClose={closeModal}
        onTitleChange={setTaskTitle}
        onCategoryChange={setTaskCategory}
        onPriorityChange={setTaskPriority}
        onSubmit={handleAddTask}
      />
    </SafeAreaView>
  );
}
