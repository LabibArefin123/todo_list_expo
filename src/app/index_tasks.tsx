import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { styles } from "../styles/home.styles";
import { TaskSectionHeader } from "./home_tasks/task_section_header";
import { TaskSearchFilter } from "./home_tasks/task_search_filter";
import { TaskList } from "./home_tasks/task_list";
import { filterTasks } from "./home_tasks/task_helpers";
import type { TaskSectionProps } from "./home_tasks/task_types";

export type { Filter, Priority, Task } from "./home_tasks/task_types";
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
  const filteredTasks = filterTasks(tasks, filter, search);

  return (
    <>
      <TaskSectionHeader onAddTask={onAddTask} />
      <TaskSearchFilter
        search={search}
        filter={filter}
        onSearchChange={onSearchChange}
        onFilterChange={onFilterChange}
      />
      <TaskList
        tasks={filteredTasks}
        onToggleTask={onToggleTask}
        onDeleteTask={onDeleteTask}
      />
      <View style={styles.bottomMessage}>
        <Ionicons name="heart" size={14} color="#9B83E8" />
        <Text style={styles.bottomMessageText}>
          Small steps lead to big achievements.
        </Text>
      </View>
    </>
  );
}
