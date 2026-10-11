import { StyleSheet } from "react-native";

export const taskFilterStyles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    gap: 9,
    marginBottom: 15,
  },
  filterButton: {
    paddingHorizontal: 17,
    paddingVertical: 9,
    borderRadius: 11,
    backgroundColor: "#EFEDF1",
  },
  filterButtonActive: {
    backgroundColor: "#302C49",
  },
  filterText: {
    color: "#85818E",
    fontSize: 11,
    fontWeight: "700",
  },
  filterTextActive: {
    color: "#FFFFFF",
  },
});