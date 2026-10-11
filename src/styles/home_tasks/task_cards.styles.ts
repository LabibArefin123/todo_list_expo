import { StyleSheet } from "react-native";

export const taskCardStyles = StyleSheet.create({
  taskList: {
    gap: 11,
  },
  taskCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#F0EDF1",
    padding: 15,
    minHeight: 83,
  },
  checkbox: {
    width: 23,
    height: 23,
    borderRadius: 8,
    borderWidth: 1.6,
    borderColor: "#C9C3D6",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },
  checkboxCompleted: {
    backgroundColor: "#8D78DC",
    borderColor: "#8D78DC",
  },
  taskContent: {
    flex: 1,
    gap: 8,
  },
  taskTitle: {
    color: "#302D43",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 19,
  },
  completedTitle: {
    color: "#A5A1AD",
    textDecorationLine: "line-through",
  },
  taskMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  categoryText: {
    color: "#918B9B",
    fontSize: 10,
    fontWeight: "600",
  },
  metaDot: {
    height: 3,
    width: 3,
    backgroundColor: "#C6C1CD",
    borderRadius: 3,
  },
  priorityContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  priorityDot: {
    width: 6,
    height: 6,
    borderRadius: 4,
  },
  priorityText: {
    fontSize: 10,
    fontWeight: "700",
  },
  deleteButton: {
    padding: 9,
    marginLeft: 5,
  },
});