import { StyleSheet } from "react-native";

export const layoutStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F6F7FC",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 40,
  },
  pressed: {
    opacity: 0.75,
  },
});