import { StyleSheet } from "react-native";

export const taskEmptyStyles = StyleSheet.create({
  emptyState: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 30,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EFEDF0",
    gap: 10,
  },
  emptyTitle: {
    color: "#302D43",
    fontSize: 16,
    fontWeight: "800",
  },
  emptyDescription: {
    color: "#9B97A3",
    fontSize: 11,
    textAlign: "center",
    lineHeight: 18,
  },
});