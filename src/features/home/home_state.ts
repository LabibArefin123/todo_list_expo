
import { useEffect, useState } from "react";
import type { Filter, Priority, Task } from "../../components/home/index_tasks";
import { loadTasks, saveTasks } from "./home_storage";

export function useHomeState() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [filter, setFilter] = useState<Filter>("All");
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskCategory, setTaskCategory] = useState("Work");
  const [taskPriority, setTaskPriority] = useState<Priority>("Medium");

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

  useEffect(() => {
    if (!loaded) return;
    void saveTasks(tasks);
  }, [tasks, loaded]);

  return {
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
  };
}
