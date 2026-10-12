import { StyleSheet } from "react-native";

export const modalOptionStyles = StyleSheet.create({
  optionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  optionButton: {
    paddingHorizontal: 13,
    paddingVertical: 10,
    backgroundColor: "#F0EEF3",
    borderRadius: 10,
  },
  optionButtonActive: {
    backgroundColor: "#EAE4FC",
    borderWidth: 1,
    borderColor: "#A18CE8",
  },
  optionText: {
    color: "#85808F",
    fontSize: 11,
    fontWeight: "700",
  },
  optionTextActive: {
    color: "#7963C9",
  },
  priorityOptions: {
    flexDirection: "row",
    gap: 9,
  },
  priorityOption: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 11,
    backgroundColor: "#F0EEF3",
  },
  priorityOptionActive: {
    backgroundColor: "#EAE4FC",
    borderWidth: 1,
    borderColor: "#A18CE8",
  },
});
