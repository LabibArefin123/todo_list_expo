import AsyncStorage from "@react-native-async-storage/async-storage";
import type { Task } from "../../components/home/home_tasks/task_types";
import { STORAGE_KEY, initialTasks } from "./home_constants";

// Load Tasks
export const loadTasks = async (): Promise<Task[]> => {
  try {
    const savedTasks = await AsyncStorage.getItem(STORAGE_KEY);

    if (!savedTasks) {
      return initialTasks;
    }

    const parsedTasks: unknown = JSON.parse(savedTasks);

    if (!Array.isArray(parsedTasks)) {
      return initialTasks;
    }

    return parsedTasks as Task[];
  } catch (error) {
    console.error("Failed to load tasks:", error);

    return initialTasks;
  }
};

// Save Tasks
export const saveTasks = async (tasks: Task[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error("Failed to save tasks:", error);
  }
};
