import type {
  Priority,
  Task,
} from "../../components/home/home_tasks/task_types";

// Toggle Task Completion
export const toggleTask = (tasks: Task[], id: string): Task[] => {
  return tasks.map((task) =>
    task.id === id
      ? {
          ...task,
          completed: !task.completed,
        }
      : task,
  );
};

// Delete Task
export const removeTask = (tasks: Task[], id: string): Task[] => {
  return tasks.filter((task) => task.id !== id);
};

// Create New Task
export const createTask = (
  title: string,
  category: string,
  priority: Priority,
): Task => {
  return {
    id: `${Date.now()}`,
    title: title.trim(),
    category,
    priority,
    completed: false,
    createdAt: new Date().toISOString(),
  };
};
