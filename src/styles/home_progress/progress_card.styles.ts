import { StyleSheet } from "react-native";

export const progressCardStyles = StyleSheet.create({
  progressCard: {
    backgroundColor: "#302C49",
    padding: 22,
    borderRadius: 25,
    marginBottom: 20,
    overflow: "hidden",
  },
  progressHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  progressLabel: {
    color: "#BDB5D9",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
  },
  progressTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
    marginTop: 7,
  },
  progressIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#484164",
    alignItems: "center",
    justifyContent: "center",
  },
});
