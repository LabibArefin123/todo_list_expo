import { ProgressCard } from "./home_progress/progress_card";
import { ProgressStatistics } from "./home_progress/progress_statistics";
import type { ProgressProps } from "./home_progress/progress_types";

export type { ProgressProps } from "./home_progress/progress_types";

export function HomeProgress(props: ProgressProps) {
  return (
    <>
      <ProgressCard {...props} />
      <ProgressStatistics {...props} />
    </>
  );
}
