import type { Task } from "../index_tasks";

export const STORAGE_KEY = "@taskflow_tasks";

export const initialTasks: Task[] = [
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

export const formattedDate = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
});
