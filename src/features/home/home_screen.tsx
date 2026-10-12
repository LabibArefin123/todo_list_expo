import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles/home.styles";
import { HomeHeader } from "../../components/home/index_header";
import { HomeTaskModal } from "../../components/home/index_modal";
import { HomeProgress } from "../../components/home/index_progress";
import { HomeTasks } from "../../components/home/index_tasks";
import { formattedDate } from "./home_constants";
import { useHomeState } from "./home_state";
import { useHomeHandlers } from "./home_handlers";
import { getHomeStatistics } from "./home_statistics";

export default function HomeScreen() {
  const state = useHomeState();

  const {
    tasks,
    setTasks,
    loaded,
    filter,
    setFilter,
    search,
    setSearch,
    modalVisible,
    setModalVisible,
    taskTitle,
    setTaskTitle,
    taskCategory,
    setTaskCategory,
    taskPriority,
    setTaskPriority,
  } = state;

  const {
    handleToggleTask,
    handleDeleteTask,
    openModal,
    closeModal,
    handleAddTask,
  } = useHomeHandlers({
    setTasks,
    setTaskTitle,
    setTaskCategory,
    setTaskPriority,
    setModalVisible,
    taskTitle,
    taskCategory,
    taskPriority,
  });

  const { completedCount, pendingCount, progress, totalTasks } =
    getHomeStatistics(tasks);

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
          <HomeHeader formattedDate={formattedDate} />

          <HomeProgress
            completedCount={completedCount}
            pendingCount={pendingCount}
            totalTasks={totalTasks}
            progress={progress}
          />

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
