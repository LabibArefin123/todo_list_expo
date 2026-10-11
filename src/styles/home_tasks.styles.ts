import { StyleSheet } from "react-native";
import { taskSectionStyles } from "./home_tasks/task_section.styles";
import { taskSearchStyles } from "./home_tasks/task_search.styles";
import { taskFilterStyles } from "./home_tasks/task_filters.styles";
import { taskCardStyles } from "./home_tasks/task_cards.styles";
import { taskEmptyStyles } from "./home_tasks/task_empty.styles";
import { taskFooterStyles } from "./home_tasks/task_footer.styles";

export const taskStyles = StyleSheet.create({
  ...taskSectionStyles,
  ...taskSearchStyles,
  ...taskFilterStyles,
  ...taskCardStyles,
  ...taskEmptyStyles,
  ...taskFooterStyles,
});