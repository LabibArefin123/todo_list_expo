import type { Priority, Task, Filter } from "./task_types";

export const filters: Filter[] = ["All", "Pending", "Completed"];

export const getPriorityColor = (priority: Priority): string => {
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

export const filterTasks = (
  tasks: Task[],
  filter: Filter,
  search: string,
): Task[] => {
  const normalizedSearch = search.toLowerCase().trim();

  return tasks.filter((task) => {
    const matchesFilter =
      filter === "All" ||
      (filter === "Pending" && !task.completed) ||
      (filter === "Completed" && task.completed);

    const matchesSearch = task.title.toLowerCase().includes(normalizedSearch);

    return matchesFilter && matchesSearch;
  });
};
