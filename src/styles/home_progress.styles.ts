import { StyleSheet } from "react-native";
import { progressCardStyles } from "./home_progress/progress_card.styles";
import { progressNumbersStyles } from "./home_progress/progress_numbers.styles";
import { progressBarStyles } from "./home_progress/progress_bar.styles";
import { progressStatsStyles } from "./home_progress/progress_stats.styles";

export const progressStyles = StyleSheet.create({
  ...progressCardStyles,
  ...progressNumbersStyles,
  ...progressBarStyles,
  ...progressStatsStyles,
});