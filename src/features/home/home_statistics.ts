
import type { Task } from "../../components/home/index_tasks";

export function getHomeStatistics(tasks: Task[]) {
  const completedCount = tasks.filter(
    (task) => task.completed,
  ).length;

  const pendingCount = tasks.length - completedCount;

  const progress = tasks.length
    ? completedCount / tasks.length
    : 0;

  return {
    completedCount,
    pendingCount,
    progress,
    totalTasks: tasks.length,
  };
}
