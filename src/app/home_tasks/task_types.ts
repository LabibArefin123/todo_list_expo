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

export type TaskSectionProps = {
  tasks: Task[];
  filter: Filter;
  search: string;
  onFilterChange: (filter: Filter) => void;
  onSearchChange: (search: string) => void;
  onAddTask: () => void;
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
};
