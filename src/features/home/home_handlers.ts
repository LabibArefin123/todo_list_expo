import type { Dispatch, SetStateAction } from "react";
import { Alert } from "react-native";
import type { Priority, Task } from "../../components/home/index_tasks";
import {
    createTask,
    removeTask,
    toggleTask as toggleTaskAction,
} from "./home_actions";

type HomeHandlerOptions = {
  setTasks: Dispatch<SetStateAction<Task[]>>;
  setTaskTitle: Dispatch<SetStateAction<string>>;
  setTaskCategory: Dispatch<SetStateAction<string>>;
  setTaskPriority: Dispatch<SetStateAction<Priority>>;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  taskTitle: string;
  taskCategory: string;
  taskPriority: Priority;
};

export function useHomeHandlers({
  setTasks,
  setTaskTitle,
  setTaskCategory,
  setTaskPriority,
  setModalVisible,
  taskTitle,
  taskCategory,
  taskPriority,
}: HomeHandlerOptions) {
  const handleToggleTask = (id: string) => {
    setTasks((previous) => toggleTaskAction(previous, id));
  };

  const handleDeleteTask = (id: string) => {
    Alert.alert("Delete task", "Are you sure you want to delete this task?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          setTasks((previous) => removeTask(previous, id));
        },
      },
    ]);
  };

  const openModal = () => {
    setTaskTitle("");
    setTaskCategory("Work");
    setTaskPriority("Medium");
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

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

  return {
    handleToggleTask,
    handleDeleteTask,
    openModal,
    closeModal,
    handleAddTask,
  };
}
