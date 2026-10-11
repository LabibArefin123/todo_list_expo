import { StyleSheet } from "react-native";

export const taskSectionStyles = StyleSheet.create({
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 17,
  },
  sectionTitle: {
    color: "#29263C",
    fontSize: 21,
    fontWeight: "800",
    letterSpacing: -0.6,
  },
  sectionSubtitle: {
    color: "#9B97A3",
    fontSize: 11,
    marginTop: 5,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    backgroundColor: "#8D78DC",
    paddingHorizontal: 14,
    paddingVertical: 11,
    borderRadius: 13,
    elevation: 3,
    shadowColor: "#8D78DC",
    shadowOpacity: 0.2,
    shadowRadius: 7,
    shadowOffset: { width: 0, height: 3 },
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "800",
  },
});